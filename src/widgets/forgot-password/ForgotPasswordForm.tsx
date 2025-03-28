'use client';

import s from './ForgotPasswordForm.module.scss';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ForgotPasswordFormData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { InputLoginKeyType } from '../types';

export const ForgotPasswordForm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [forgotPasswordData, setForgotPasswordData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const token = searchParams?.get('token');

	useEffect(() => {
		if (token) setStep(3);
	}, [token]);

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		setForgotPasswordData((prevState) => ({ ...prevState, [id]: value }));
	};

	const handlerSend = () => {
		const sendEmailToken = async () => {
			const { email } = forgotPasswordData;
			const body = { email };
			const apiUrl = '/api/send-email-token';

			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const data = await response.json();
			console.log('response: ', response, 'RegisterForm data: ', data);

			if (response.status === 200) setStep(2);
		};

		sendEmailToken();
	};

	const handlerSetNewPassword = () => {
		const setNewPassword = async () => {
			const { password } = forgotPasswordData;
			const body = { token, password };
			const apiUrl = '/api/forgot-password';

			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const data = await response.json();
			console.log('response: ', response, 'RegisterForm data: ', data);

			if (response.status === 200) setStep(4);
		};

		setNewPassword();
	};

	const handlerSigninBtn = () => router.push('/login');

	return (
		<>
			<FormTitle data={ForgotPasswordFormData} />
			{step === 1 && (
				<>
					<div className={s.confirmText}>{TEXT.WriteEmail}</div>
					<InputLogin
						header={TEXT.Email}
						id={'email'}
						value={forgotPasswordData.email}
						handler={handlerInput}
					/>
					<div className={s.btnWrapper}>
						<GradientButton handler={handlerSend}>{TEXT.Send}</GradientButton>
					</div>
				</>
			)}
			{step === 2 && <div className={s.confirmText}>{TEXT.CheckEmail}</div>}
			{step === 3 && (
				<>
					<div className={s.passwordBlock}>
						<InputLogin
							header={TEXT.Password}
							footer={TEXT.PasswordTips}
							isInputPasswordType={true}
							id={'password'}
							value={forgotPasswordData.password}
							handler={handlerInput}
						/>
						<InputLogin
							header={TEXT.PasswordConfirm}
							isInputPasswordType={true}
							id={'confirmPassword'}
							value={forgotPasswordData.confirmPassword}
							handler={handlerInput}
						/>
					</div>
					<div className={s.btnWrapper}>
						<GradientButton handler={handlerSetNewPassword}>
							{TEXT.SetNewPassword}
						</GradientButton>
					</div>
				</>
			)}
			{step === 4 && (
				<>
					<div className={s.confirmText}>{TEXT.ConfirmNewPasswordOk}</div>
					<div className={s.btnWrapper}>
						<GradientButton handler={handlerSigninBtn}>
							{TEXT.Login}
						</GradientButton>
					</div>
				</>
			)}
		</>
	);
};
