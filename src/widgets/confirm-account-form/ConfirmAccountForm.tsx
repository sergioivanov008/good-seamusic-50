'use client';

import s from './ConfirmAccountForm.module.scss';
import { FormTitle, InputLogin } from '@/shared/ui';
import { ConfirmAccountFormData, TEXT } from '@/shared/constants/constants';
import { GradientButton } from '@/shared/ui/buttons';
import { useState } from 'react';
import { InputLoginKeyType } from '../types';

export const ConfirmAccountForm = () => {
	const [confirmAccountData, setConfirmAccountData] = useState({
		code: '',
	});

	const handlerInput = (id: InputLoginKeyType, value: string) => {
		setConfirmAccountData((prevState) => ({ ...prevState, [id]: value }));
	};

	const handlerSignIn = () => {
		console.log('confirmAccountData: ', confirmAccountData)
	};

	return (
		<>
			<FormTitle data={ConfirmAccountFormData} />
			<div className={s.confirmText}>
				{TEXT.ConfirmText}
				<span className={s.tempEmail}>{TEXT.TempEmail}</span>
			</div>
			<InputLogin
			  type={'text'}
				header={TEXT.Code}
				id={'code'}
				value={confirmAccountData.code}
				handler={handlerInput}
			/>
			<div className={s.btnWrapper} onClick={handlerSignIn}>
				<GradientButton>{TEXT.SignIn}</GradientButton>
			</div>
		</>
	);
};
