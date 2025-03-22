// import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import Nodemailer from 'next-auth/providers/nodemailer';
// import { prisma } from './prisma/prisma';

// export const { handlers, auth, signIn, signOut } = NextAuth({
// 	adapter: PrismaAdapter(prisma),
// 	providers: [
// 		Nodemailer({
// 			server: {
// 				host: process.env.EMAIL_SERVER_HOST,
// 				port: Number(process.env.EMAIL_SERVER_PORT),
// 				auth: {
// 					user: process.env.EMAIL_SERVER_USER,
// 					pass: process.env.EMAIL_SERVER_PASSWORD,
// 				},
// 			},
// 			from: process.env.EMAIL_FROM,
// 		}),
// 	],
// });

// import NextAuth from 'next-auth';
// import Google from 'next-auth/providers/google';
// import Spotify from 'next-auth/providers/spotify';
// import Credentials from 'next-auth/providers/credentials';
// import { authConfig } from './auth.config';
// import { z } from 'zod';

// export const { handlers, signIn, signOut, auth } = NextAuth({
// 	...authConfig,
// 	providers: [
// 		Google({
// 			clientId: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		}),
// 		Spotify({
// 			clientId: process.env.SPOTIFY_CLIENT_ID,
// 			clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
// 		}),
// 		// Credentials({
// 		// 	async authorize(credentials) {
// 		// 		const parsedCredentials = z
// 		// 			.object({ email: z.string().email(), password: z.string().min(6) })
// 		// 			.safeParse(credentials);
// 		// 	},
// 		// }),
// 	],
// });

// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { z } from 'zod';

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = z
//           .object({ email: z.string().email(), password: z.string().min(6) })
//           .safeParse(credentials);
//       },
//     }),
//   ],
// });

import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Spotify from 'next-auth/providers/spotify';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Spotify({
			clientId: process.env.SPOTIFY_CLIENT_ID,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
		}),
	],
});
