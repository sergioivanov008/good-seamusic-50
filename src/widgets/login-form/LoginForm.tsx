'use client';

import Link from 'next/link';
import s from './LoginForm.module.scss';
import { ButtonLogin, Divider, FormTitle, InputLogin } from '@/shared/ui';
import ImportedIconGoogle from '@/shared/assets/icons/SocialMediaLogoGoogle.svg';
import ImportedIconSpotify from '@/shared/assets/icons/SocialMediaLogoSpotify.svg';
import { LoginFormTitleData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { InputLoginKeyType } from '../types';
import { useRouter } from 'next/navigation';

const IconGoogle: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconGoogle;
const IconSpotify: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconSpotify;

export const LoginForm = () => {
	const router = useRouter();
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		setLoginData((prevState) => ({ ...prevState, [id]: value }));
	};

	const signinGoogle = () => signIn('google', { redirectTo: '/profile' });
	const signinSpotify = () => signIn('spotify', { redirectTo: '/profile' });
	const handlerSignIn = async () => {
		const response = await signIn('credentials', {
			email: loginData.email,
			password: loginData.password,
			redirect: false,
		});

		if (response?.error) {
			console.error('Ошибка авторизации:', response.error);
			console.log('response: ', response);
		} else {
			router.push('/profile');
		}
	};

	return (
		<>
			<FormTitle data={LoginFormTitleData} />
			<div className={s.loginBlock}>
				<ButtonLogin
					icon={IconGoogle}
					btnText={TEXT.LogInGooglePlaceholder}
					handler={signinGoogle}
				/>
				<ButtonLogin
					icon={IconSpotify}
					btnText={TEXT.LogInSpotifyPlaceholder}
					handler={signinSpotify}
				/>
			</div>
			<Divider text={TEXT.OR} />
			<InputLogin
				header={TEXT.EmailAdress}
				id={'email'}
				value={loginData.email}
				handler={handlerInput}
			/>
			<InputLogin
				header={TEXT.Password}
				footer={TEXT.ForgetPass}
				footerTo="/forgot-password"
				isInputPasswordType={true}
				id={'password'}
				value={loginData.password}
				handler={handlerInput}
			/>
			<div className={s.btnWrapper}>
				<GradientButton handler={handlerSignIn}>{TEXT.SignIn}</GradientButton>
			</div>
			<div className={s.signUpLine}>
				<div>{TEXT.DontHaveAcc}</div>
				<Link href="/register" className={s.linkUnderline}>
					{TEXT.SignUp}
				</Link>
			</div>
		</>
	);
};
