import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '../../../../prisma/prisma';

export async function POST(req: Request) {
	try {
		const { email, password } = await req.json();

		if (!email || !password) {
			return NextResponse.json(
				{ message: 'Email and password are required.' },
				{ status: 400 }
			);
		}

		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (!user) {
			return NextResponse.json(
				{ message: 'No user found with this email.' },
				{ status: 404 }
			);
		}

		const isValidPassword = await bcrypt.compare(password, user.password);

		if (!isValidPassword) {
			return NextResponse.json(
				{ message: 'Invalid password.' },
				{ status: 401 }
			);
		}

		const { password: _, ...userWithoutPassword } = user;
		return NextResponse.json(userWithoutPassword, { status: 200 });
	} catch (error) {
		console.error('Error during signin:', error);
		return NextResponse.json(
			{ message: 'Internal server error.' },
			{ status: 500 }
		);
	}
}
