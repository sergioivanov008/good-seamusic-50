import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Spotify from 'next-auth/providers/spotify';
import Credentials from 'next-auth/providers/credentials';

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
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				try {
					const response = await fetch(
						`${process.env.NEXTAUTH_URL}/api/signin`,
						{
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								email: credentials.email,
								password: credentials.password,
							}),
						}
					);

					const user = await response.json();

					if (!response.ok || !user) {
						throw new Error(user.message || 'Failed to sign in.');
					}

					return user;
				} catch (error) {
					console.error('Error during authorization:', error);
					throw new Error('Failed to sign in.');
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
});
