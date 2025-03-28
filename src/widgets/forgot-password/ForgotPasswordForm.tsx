'use client';

import s from './ForgotPasswordForm.module.scss';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ForgotPasswordFormData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { InputLoginKeyType, IsTouchedType, LoginDataType } from '../types';
import {
	forgotPassStepOneSchema,
	ForgotPassStepOneSchemaType,
	forgotPassStepThreeSchema,
	ForgotPassStepThreeSchemaType,
} from '@/shared/validations/validation-schems';

export const ForgotPasswordForm = () => {
	const searchParams = useSearchParams();
	const token = searchParams?.get('token');
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [forgotPasswordStepOneData, setForgotPasswordStepOneData] =
		useState<LoginDataType>({
			email: '',
		});
	const [isTouchedStepOne, setIsTouchedStepOne] = useState<IsTouchedType>({
		email: false,
	});
	const [errorsStepOne, setErrorsStepOne] = useState<
		Partial<Record<keyof ForgotPassStepOneSchemaType, string>>
	>({});
	const [isValidStepOne, setIsValidStepOne] = useState(false);

	const [forgotPasswordStepThreeData, setForgotPasswordStepThreeData] =
		useState<LoginDataType>({
			password: '',
			confirmPassword: '',
		});
	const [isTouchedStepThree, setIsTouchedStepThree] = useState<IsTouchedType>({
		password: false,
		confirmPassword: false,
	});
	const [errorsStepThree, setErrorsStepThree] = useState<
		Partial<Record<keyof ForgotPassStepThreeSchemaType, string>>
	>({});
	const [isValidStepThree, setIsValidStepThree] = useState(false);

	useEffect(() => {
		const validation = forgotPassStepOneSchema.safeParse(
			forgotPasswordStepOneData
		);

		if (!validation.success) {
			const zodErrors: Partial<
				Record<keyof ForgotPassStepOneSchemaType, string>
			> = {};
			validation.error.errors.forEach((error) => {
				const field = error.path[0] as keyof ForgotPassStepOneSchemaType;
				zodErrors[field] = error.message;
			});
			setErrorsStepOne(zodErrors);
			setIsValidStepOne(false);
		} else {
			setErrorsStepOne({});
			setIsValidStepOne(true);
		}
	}, [forgotPasswordStepOneData]);

	useEffect(() => {
		const validation = forgotPassStepThreeSchema.safeParse(
			forgotPasswordStepThreeData
		);

		if (!validation.success) {
			const zodErrors: Partial<
				Record<keyof ForgotPassStepThreeSchemaType, string>
			> = {};
			validation.error.errors.forEach((error) => {
				const field = error.path[0] as keyof ForgotPassStepThreeSchemaType;
				zodErrors[field] = error.message;
			});
			setErrorsStepThree(zodErrors);
			setIsValidStepThree(false);
		} else {
			setErrorsStepThree({});
			setIsValidStepThree(true);
		}
	}, [forgotPasswordStepThreeData]);

	useEffect(() => {
		if (token) setStep(3);
	}, [token]);

	const handlerInputStepOne = (id: InputLoginKeyType, value: string) => {
		if (!isTouchedStepOne[id])
			setIsTouchedStepOne((prevState) => ({ ...prevState, [id]: true }));
		setForgotPasswordStepOneData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handlerInputStepThree = (id: InputLoginKeyType, value: string) => {
		if (!isTouchedStepThree[id])
			setIsTouchedStepThree((prevState) => ({ ...prevState, [id]: true }));
		setForgotPasswordStepThreeData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handlerSend = () => {
		const sendEmailToken = async () => {
			const { email } = forgotPasswordStepOneData;
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
			const { password } = forgotPasswordStepThreeData;
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
						value={forgotPasswordStepOneData.email}
						handler={handlerInputStepOne}
						error={errorsStepOne.email}
						isTouched={isTouchedStepOne.email}
					/>
					<div className={s.btnWrapper}>
						<GradientButton isDisabled={!isValidStepOne} handler={handlerSend}>
							{TEXT.Send}
						</GradientButton>
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
							value={forgotPasswordStepThreeData.password}
							handler={handlerInputStepThree}
							error={errorsStepThree.password}
							isTouched={isTouchedStepThree.password}
						/>
						<InputLogin
							header={TEXT.PasswordConfirm}
							isInputPasswordType={true}
							id={'confirmPassword'}
							value={forgotPasswordStepThreeData.confirmPassword}
							handler={handlerInputStepThree}
							error={errorsStepThree.confirmPassword}
							isTouched={isTouchedStepThree.confirmPassword}
						/>
					</div>
					<div className={s.btnWrapper}>
						<GradientButton
							isDisabled={!isValidStepThree}
							handler={handlerSetNewPassword}>
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
