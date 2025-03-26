import bcrypt from 'bcryptjs';
import { prisma } from '../../../../prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		if (req.method !== 'POST') {
			return NextResponse.json(
				{ message: 'Поддерживается только метод POST' },
				{ status: 405 }
			);
		}

		const { token, password } = await req.json();

		if (!token || !password) {
			return NextResponse.json(
				{ message: 'Поля token и password являются обязательными' },
				{ status: 400 }
			);
		}

		const curUser = await prisma.user.findFirst({
			where: { passwordToken: token },
		});

		if (!curUser) {
			return NextResponse.json(
				{ message: 'Неправильная ссылка для восстановления пароля' },
				{ status: 404 }
			);
		}
		if (
			!curUser.passwordTokenExpires ||
			curUser.passwordTokenExpires < new Date()
		) {
			await prisma.user.update({
				where: { email: curUser.email },
				data: {
					passwordToken: null,
					passwordTokenExpires: null,
					updatedAt: new Date(),
				},
			});

			return NextResponse.json(
				{ message: 'Срок действия ссылки истек' },
				{ status: 400 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await prisma.user.update({
			where: { email: curUser.email },
			data: {
				password: hashedPassword,
				passwordToken: null,
				passwordTokenExpires: null,
				updatedAt: new Date(),
			},
		});

		return NextResponse.json(
			{ message: 'Пароль успешно изменён' },
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
