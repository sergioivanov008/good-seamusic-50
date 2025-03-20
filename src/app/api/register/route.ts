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

		const { name, email, password } = await req.json();

		if (!name || !email || !password) {
			return NextResponse.json(
				{ message: 'Поля name, email, и password являются обязательными' },
				{ status: 400 }
			);
		}

		const userByName = await prisma.user.findUnique({ where: { name } });
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
