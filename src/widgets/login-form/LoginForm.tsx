'use client';

import Link from 'next/link';
import s from './LoginForm.module.scss';
import { ButtonLogin, Divider, FormTitle, InputLogin } from '@/shared/ui';
import ImportedIconGoogle from '@/shared/assets/icons/SocialMediaLogoGoogle.svg';
import ImportedIconSpotify from '@/shared/assets/icons/SocialMediaLogoSpotify.svg';
import { LoginFormTitleData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { InputLoginKeyType, IsTouchedType, LoginDataType } from '../types';
import { useRouter } from 'next/navigation';
import {
	loginSchema,
	LoginSchemaType,
} from '@/shared/validations/validation-schems';

const IconGoogle: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconGoogle;
const IconSpotify: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconSpotify;

export const LoginForm = () => {
	const router = useRouter();
	const [loginData, setLoginData] = useState<LoginDataType>({
		email: '',
		password: '',
	});
	const [isTouched, setIsTouched] = useState<IsTouchedType>({
		email: false,
		password: false,
	});

	const [errors, setErrors] = useState<
		Partial<Record<keyof LoginSchemaType, string>>
	>({});
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		const validation = loginSchema.safeParse(loginData);

		if (!validation.success) {
			const fieldErrors: Partial<Record<keyof LoginSchemaType, string>> = {};
			validation.error.errors.forEach((err) => {
				const fieldName = err.path[0] as keyof LoginSchemaType;
				if (!fieldErrors[fieldName]) {
					fieldErrors[fieldName] = err.message;
				}
			});
			setErrors(fieldErrors);
			setIsValid(false);
		} else {
			setErrors({});
			setIsValid(true);
		}
	}, [loginData]);

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		if (!isTouched[id])
			setIsTouched((prevState) => ({ ...prevState, [id]: true }));
		  setLoginData((prevState) => ({ ...prevState, [id]: value }));
	  };

	const signinGoogle = () => signIn('google', { redirectTo: '/profile' });
	const signinSpotify = () => signIn('spotify', { redirectTo: '/profile' });
	const handlerSignIn = async () => {
		if (!isValid) return;

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
				error={errors.email}
				isTouched={isTouched.email}
			/>
			<InputLogin
				header={TEXT.Password}
				footer={TEXT.ForgetPass}
				footerTo="/forgot-password"
				isInputPasswordType={true}
				id={'password'}
				value={loginData.password}
				handler={handlerInput}
				error={errors.password}
				isTouched={isTouched.password}
			/>
			<div className={s.btnWrapper}>
				<GradientButton isDisabled={!isValid} handler={handlerSignIn}>
					{TEXT.SignIn}
				</GradientButton>
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
