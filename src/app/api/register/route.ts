import bcrypt from 'bcryptjs';
import { prisma } from '../../../../prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
	try {
		if (req.method !== 'POST') {
			return NextResponse.json(
				{ message: 'Поддерживается только метод POST' },
				{ status: 405 }
			);
		}

		const { name, email, password } = await req.json();

		if (!name || !email || !password) {
			return NextResponse.json(
				{ message: 'Поля name, email, и password являются обязательными' },
				{ status: 400 }
			);
		}

		const userByName = await prisma.user.findFirst({ where: { name } });
		const userByEmail = await prisma.user.findUnique({ where: { email } });

		if (userByName && userByEmail) {
			return NextResponse.json(
				{ message: 'Пользователь с таким именем и email уже зарегистрирован' },
				{ status: 409 }
			);
		}
		if (userByName) {
			return NextResponse.json(
				{ message: 'Пользователь с таким именем уже зарегистрирован' },
				{ status: 409 }
			);
		}
		if (userByEmail) {
			return NextResponse.json(
				{ message: 'Пользователь с таким email уже зарегистрирован' },
				{ status: 409 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
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
			to: newUser.email,
			subject: 'Подтверждение email',
			html: `<p>Здравствуйте, ${newUser.name}!</p>
		         <p>Для подтверждения email перейдите по ссылке:</p>
		         <p>Ссылка действует 1 час.</p>`,
		});

		return NextResponse.json(
			{ message: 'Пользователь успешно зарегистрирован', user: newUser },
			{ status: 201 }
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
