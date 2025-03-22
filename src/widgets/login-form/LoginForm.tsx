'use client';

import Link from 'next/link';
import s from './LoginForm.module.scss';
import { ButtonLogin, Divider, FormTitle, InputLogin } from '@/shared/ui';
import ImportedIconGoogle from '@/shared/assets/icons/SocialMediaLogoGoogle.svg';
import ImportedIconSpotify from '@/shared/assets/icons/SocialMediaLogoSpotify.svg';
import { LoginFormTitleData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { signIn, useSession } from 'next-auth/react';

const IconGoogle: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconGoogle;
const IconSpotify: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconSpotify;

export const LoginForm = () => {
	const signinGoogle = () => signIn('google', { redirectTo: '/profile' });
	const signinSpotify = () => signIn('spotify', { redirectTo: '/profile' });
	const session = useSession();

	console.log('LoginForm session: ', session);

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
			<InputLogin type={'text'} header={TEXT.EmailAdress} />
			<InputLogin
				type={'password'}
				header={TEXT.Password}
				footer={TEXT.ForgetPass}
				footerTo="/"
			/>
			<div className={s.btnWrapper}>
				<GradientButton to="/">{TEXT.SignIn}</GradientButton>
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
