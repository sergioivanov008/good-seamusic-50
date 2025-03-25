'use client';

import s from './ConfirmAccountForm.module.scss';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ConfirmAccountFormData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { useEffect, useState } from 'react';
import { InputLoginKeyType } from '../types';
import { useRouter, useSearchParams } from 'next/navigation';

export const ConfirmAccountForm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const curEmail = searchParams?.get('email');

	const [confirmAccountData, setConfirmAccountData] = useState({
		code: '',
	});

	const [step, setStep] = useState(1);

	useEffect(() => {
		if (!curEmail) router.push('/');
	}, []);

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		setConfirmAccountData((prevState) => ({ ...prevState, [id]: value }));
	};

	const handlerConfirmAccount = () => {
		const confirmAccount = async () => {
			const { code } = confirmAccountData;
			const body = { code, email: curEmail };
			const apiUrl = '/api/confirm-account';

			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const data = await response.json();
			console.log('response: ', response, 'RegisterForm data: ', data);

			if (response.status === 200) setStep(2);
		};

		confirmAccount();
	};

	const handlerSigninBtn = () => router.push('/login');

	return (
		<>
			<FormTitle data={ConfirmAccountFormData} />
			<div className={s.confirmText}>
				{step === 1 && (
					<>
						{TEXT.ConfirmText}
						<span className={s.tempEmail}>{curEmail}</span>
						{TEXT.ConfirmTextExpires}
					</>
				)}
				{step === 2 && <>{TEXT.ConfirmAccountOk}</>}
			</div>
			{step === 1 && (
				<InputLogin
					type={'text'}
					header={TEXT.Code}
					id={'code'}
					value={confirmAccountData.code}
					handler={handlerInput}
				/>
			)}
			{step === 1 && (
				<div className={s.btnWrapper} onClick={handlerConfirmAccount}>
					<GradientButton>{TEXT.Confirm}</GradientButton>
				</div>
			)}
			{step === 2 && (
				<div className={s.btnWrapper} onClick={handlerSigninBtn}>
					<GradientButton>{TEXT.Login}</GradientButton>
				</div>
			)}
		</>
	);
};
