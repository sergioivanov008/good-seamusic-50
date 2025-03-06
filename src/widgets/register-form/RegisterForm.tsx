'use client';

import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { useState } from 'react';
import { FormTitle, PreferItem } from '@/shared/ui';
import { ArrowBtn } from '@/shared/ui/buttons';
import { PREFER_TEXT, RegisterFormTitleData, TEXT } from '@/shared/constants/constants';
import ArrowForward from '@/shared/assets/icons/ArrowForward.svg';

export const RegisterForm = () => {
	const [step, setStep] = useState(1);

	const setNextStep = () => setStep(2);
	const setPrevStep = () => setStep(1);

	return (
		<form className={s.form}>
			{step === 1 && (
				<>
					<FormTitle data={RegisterFormTitleData} />
					<div className={s.registerBlock}>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{TEXT.UserName}</div>
							<input className={s.formInput} type="text" />
						</div>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{TEXT.EmailAdress}</div>
							<input className={s.formInput} type="text" />
						</div>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{TEXT.Password}</div>
							<input className={s.formInput} type="password" />
							<div className={s.inputFooter}>
								{TEXT.PasswordTips}
							</div>
						</div>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{TEXT.PasswordConfirm}</div>
							<input className={s.formInput} type="password" />
						</div>
					</div>
					<div className={s.nextStep}>
						<div className={s.nextBtn} onClick={setNextStep}>
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
						<div onClick={setPrevStep} className={s.btnWrapper}>
							<ArrowBtn variant="primary" />
						</div>
						<div className={s.logo}>{TEXT.LogoTitle}</div>
					</div>
					<div className={s.roleWrapper}>
						<div className={s.roleTitle}>{TEXT.WhoAreYou}</div>
						<div className={s.role}>
							<div className={`${s.roleItem} ${s.active}`}>Artist</div>
							<div className={s.roleItem}>Producer</div>
							<div className={s.roleItem}>Listener</div>
						</div>
					</div>
					<div className={s.preferWrapper}>
						<div className={s.preferTitle}>
							{TEXT.YouPrefer}
						</div>
						<div className={s.prefer}>
							{PREFER_TEXT.map((el, index) => (
								<PreferItem key={index} name={el} />
							))}
						</div>
					</div>
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
					<Link href="/">
						<button className={s.btnAuth} role="presentation">
							{TEXT.SignUp}
						</button>
					</Link>
					<div className={s.signUpLine}>
						<div>{TEXT.HaveAcc}</div>
						<Link href="/login" className={s.linkUnderline}>
							{TEXT.SignIn}
						</Link>
					</div>
				</>
			)}
		</form>
	);
};
