'use client';

import Link from 'next/link';
import s from './input-login.module.scss';
import { ChangeEvent, useState } from 'react';
import { InputLoginProps } from '../types';
import ImportedIconEyeClosed from '@/shared/assets/icons/eye_closed.svg';
import ImportedIconEyeOpened from '@/shared/assets/icons/eye_opened.svg';

const IconEyeClosed: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconEyeClosed;
const IconEyeOpened: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconEyeOpened;

export const InputLogin = ({
	header,
	placeholder = '',
	footer,
	footerTo,
	isInputPasswordType = false,
	id,
	value,
	handler,
	error,
	isTouched,
}: InputLoginProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const inputPasswordType = isVisible ? 'text' : 'password';
	const curType = isInputPasswordType ? inputPasswordType : 'text';
	const Icon = isVisible ? IconEyeOpened : IconEyeClosed;

	const headerStyle =
		error && isTouched ? `${s.inputHeader} ${s.error}` : s.inputHeader;
	const headerContent = error && isTouched ? error : header;

	const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const curValue = e.target.value;
		handler && id && handler(id, curValue);
	};

	const handlerIconClick = () => setIsVisible(!isVisible);

	return (
		<div className={s.loginInput}>
			{header && <div className={headerStyle}>{headerContent}</div>}
			<input
				className={s.formInput}
				type={curType}
				placeholder={placeholder}
				value={value}
				onChange={handlerOnChange}
			/>
			{footer && footerTo && (
				<div className={s.inputFooterLink}>
					<Link href={footerTo} className={s.linkUnderline}>
						{footer}
					</Link>
				</div>
			)}
			{footer && !footerTo && <div className={s.inputFooterText}>{footer}</div>}
			{isInputPasswordType && (
				<div className={s.imgLogoInput} onClick={handlerIconClick}>
					<Icon width={24} height={24} />
				</div>
			)}
		</div>
	);
};
