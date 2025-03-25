import bcrypt from 'bcryptjs';
import { prisma } from '../../../../prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getRandomCode } from '@/shared/utils';
import { EMAIL_CODE_LENGTH } from '@/shared/constants/constants';

export async function POST(req: NextRequest) {
	try {
		if (req.method !== 'POST') {
			return NextResponse.json(
				{ message: 'Поддерживается только метод POST' },
				{ status: 405 }
			);
		}

		const { code, email } = await req.json();

		if (!code || !email) {
			return NextResponse.json(
				{ message: 'Поля code и email являются обязательными' },
				{ status: 400 }
			);
		}

		const curUser = await prisma.user.findUnique({ where: { email } });

		if (!curUser) {
			return NextResponse.json(
				{ message: 'Такой пользователь не зарегистрирован' },
				{ status: 404 }
			);
		}
		if (curUser.emailVerified) {
			return NextResponse.json(
				{ message: 'Аккаунт уже подтвержден' },
				{ status: 400 }
			);
		}
		if (curUser.verificationCode !== code) {
			return NextResponse.json({ message: 'Неверный код' }, { status: 400 });
		}
		if (
			!curUser.verificationCodeExpires ||
			curUser.verificationCodeExpires < new Date()
		) {
			await prisma.user.update({
				where: { email },
				data: {
					verificationCode: null,
					verificationCodeExpires: null,
					updatedAt: new Date(),
				},
			});

			return NextResponse.json(
				{ message: 'Срок действия кода истек' },
				{ status: 400 }
			);
		}

		await prisma.user.update({
			where: { email },
			data: {
				emailVerified: new Date(),
				verificationCode: null,
				verificationCodeExpires: null,
				updatedAt: new Date(),
			},
		});

		return NextResponse.json(
			{ message: 'Аккаунт успешно подтвержден!' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Ошибка при регистрации:', error);
		return NextResponse.json(
			{ message: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
}
