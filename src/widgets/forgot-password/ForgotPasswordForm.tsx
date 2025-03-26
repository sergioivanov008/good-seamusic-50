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
						type={'text'}
						header={TEXT.Email}
						id={'email'}
						value={forgotPasswordData.email}
						handler={handlerInput}
					/>
					<div className={s.btnWrapper} onClick={handlerSend}>
						<GradientButton>{TEXT.Send}</GradientButton>
					</div>
				</>
			)}
			{step === 2 && <div className={s.confirmText}>{TEXT.CheckEmail}</div>}
			{step === 3 && (
				<>
					<div className={s.passwordBlock}>
						<InputLogin
							type={'password'}
							header={TEXT.Password}
							footer={TEXT.PasswordTips}
							id={'password'}
							value={forgotPasswordData.password}
							handler={handlerInput}
						/>
						<InputLogin
							type={'password'}
							header={TEXT.PasswordConfirm}
							id={'confirmPassword'}
							value={forgotPasswordData.confirmPassword}
							handler={handlerInput}
						/>
					</div>
					<div className={s.btnWrapper} onClick={handlerSetNewPassword}>
						<GradientButton>{TEXT.SetNewPassword}</GradientButton>
					</div>
				</>
			)}
			{step === 4 && (
				<>
					<div className={s.confirmText}>{TEXT.ConfirmNewPasswordOk}</div>
					<div className={s.btnWrapper} onClick={handlerSigninBtn}>
						<GradientButton>{TEXT.Login}</GradientButton>
					</div>
				</>
			)}
		</>
	);
};
