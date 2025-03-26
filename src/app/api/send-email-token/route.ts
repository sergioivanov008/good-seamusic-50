import bcrypt from 'bcryptjs';
import { prisma } from '../../../../prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getRandomCode } from '@/shared/utils';
import { EMAIL_CODE_LENGTH } from '@/shared/constants/constants';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
	try {
		if (req.method !== 'POST') {
			return NextResponse.json(
				{ message: 'Поддерживается только метод POST' },
				{ status: 405 }
			);
		}

		const { email } = await req.json();

		if (!email) {
			return NextResponse.json(
				{ message: 'Поле email является обязательным' },
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

		const passwordToken = getRandomCode(EMAIL_CODE_LENGTH).toString();
		const hashedToken = await bcrypt.hash(passwordToken, 10);
		const passwordTokenExpires = new Date();
		passwordTokenExpires.setMinutes(passwordTokenExpires.getMinutes() + 10);
		const resetUrl = `${process.env.NEXTAUTH_URL}/forgot-password?token=${hashedToken}`;

		await prisma.user.update({
			where: { email },
			data: {
				passwordToken: hashedToken,
				passwordTokenExpires,
				updatedAt: new Date(),
			},
		});

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"GoodSeamusic Admin" <${process.env.SMTP_USER}>`,
			to: curUser.email,
			subject: 'Подтверждение email',
			html: `<p>Здравствуйте, ${curUser.name}!</p>
						 <p>Перейдите по ссылке и <strong><a href="${resetUrl}">установите новый пароль</a></strong></p>
						 <p>Код действует 10 минут.</p>`,
		});

		return NextResponse.json(
			{ message: 'Инструкции высланы на email' },
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
