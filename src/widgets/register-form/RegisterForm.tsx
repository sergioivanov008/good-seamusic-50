'use client';

import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { useEffect, useState } from 'react';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ArrowBtn, GradientButton } from '@/shared/ui/buttons';
import {
	RegisterFormTitleData,
	ROLE_LIST,
	TEXT,
} from '@/shared/constants/constants';
import ArrowForward from '@/shared/assets/icons/ArrowForward.svg';
import { Prefer, Role } from '@/entities';
import { Tags } from '@prisma/client';
import { InputLoginKeyType, RegistrationDataType } from '../types';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [tags, setTags] = useState<Tags[]>([]);
	const [registrationData, setRegistrationData] =
		useState<RegistrationDataType>({
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			userRole: [],
			prefer: [],
		});
	const [isSending, setIsSending] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/tags');
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const result = await response.json();
				setTags(result);
			} catch (error: unknown) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		setRegistrationData((prevState) => ({ ...prevState, [id]: value }));
	};

	const handlerRole = (role: string) => {
		setRegistrationData((prevState) => ({ ...prevState, userRole: [role] }));
	};

	const handlerPrefer = (prefer: string) => {
		if (
			registrationData.prefer.length &&
			registrationData.prefer.includes(prefer)
		) {
			const index = registrationData.prefer.findIndex((el) => el === prefer);
			const newArr = [
				...registrationData.prefer.slice(0, index),
				...registrationData.prefer.slice(index + 1),
			];

			setRegistrationData((prevState) => ({ ...prevState, prefer: newArr }));
		} else {
			const newArr = [...registrationData.prefer, prefer];

			setRegistrationData((prevState) => ({ ...prevState, prefer: newArr }));
		}
	};

	const handlerRegistration = () => {
		console.log('registrationData:', registrationData);
		setIsSending(true);

		const registerUser = async () => {
			const { name, email, password } = registrationData;
			const body = { name, email, password };
			const apiUrl = '/api/register';

			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const data = await response.json();
			console.log(
				'response: ',
				response,
				'RegisterForm data: ',
				data,
				'data.message',
				data.message
			);
			setIsSending(false);
			if (response.status === 201)
				router.push(`/confirm-account?email=${encodeURIComponent(data.email)}`);
		};

		registerUser();
	};

	const handlerStep = () => {
		if (step === 1) setStep(2);
		else if (step === 2) setStep(1);
	};

	return (
		<>
			{step === 1 && (
				<>
					<FormTitle data={RegisterFormTitleData} />
					<div className={s.registerBlock}>
						<InputLogin
							header={TEXT.UserName}
							id={'name'}
							value={registrationData.name}
							handler={handlerInput}
						/>
						<InputLogin
							header={TEXT.EmailAdress}
							id={'email'}
							value={registrationData.email}
							handler={handlerInput}
						/>
						<InputLogin
							header={TEXT.Password}
							footer={TEXT.PasswordTips}
							isInputPasswordType={true}
							id={'password'}
							value={registrationData.password}
							handler={handlerInput}
						/>
						<InputLogin
							header={TEXT.PasswordConfirm}
							footer={''}
							isInputPasswordType={true}
							id={'confirmPassword'}
							value={registrationData.confirmPassword}
							handler={handlerInput}
						/>
					</div>
					<div className={s.nextStep}>
						<div className={s.nextBtn} onClick={handlerStep}>
							<div className={s.left}>{TEXT.LastStep}</div>
							<ArrowForward width={13} height={26} />
						</div>
						<div className={s.signUpLine}>
							<div>{TEXT.HaveAcc}</div>
							<Link href="/login" className={s.linkUnderline}>
								{TEXT.SignIn}
							</Link>
						</div>
					</div>
				</>
			)}
			{step === 2 && (
				<>
					<div className={s.titleWrapper}>
						<div className={s.btnWrapper} onClick={handlerStep}>
							<ArrowBtn variant="primary" />
						</div>
						<div className={s.logo}>{TEXT.LogoTitle}</div>
					</div>
					<Role
						role={ROLE_LIST}
						handler={handlerRole}
						userRole={registrationData.userRole[0]}
					/>
					<Prefer
						tags={tags}
						handler={handlerPrefer}
						userPrefer={registrationData.prefer}
					/>
					<div className={s.termsWrapper}>
						<input type="checkbox" className={s.termsCheckbox} />
						<div className={s.termTextWrapper}>
							{TEXT.Terms_1}
							<Link href="/terms" className={s.termLink}>
								{TEXT.Terms_2}
							</Link>
							{TEXT.Terms_3}
							<Link href="/priacy-policy" className={s.termLink}>
								{TEXT.Terms_4}
							</Link>
						</div>
					</div>
					<GradientButton handler={handlerRegistration}>
						{TEXT.SignUp}
					</GradientButton>
					<div className={s.signUpLine}>
						<div>{TEXT.HaveAcc}</div>
						<Link href="/login" className={s.linkUnderline}>
							{TEXT.SignIn}
						</Link>
					</div>
					{isSending && <h2 style={{ color: 'red' }}>Sending request...</h2>}
				</>
			)}
		</>
	);
};
