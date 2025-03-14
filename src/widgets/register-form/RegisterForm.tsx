'use client';

import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { useEffect, useState } from 'react';
import { FormTitle, InputLogin, PreferItem } from '@/shared/ui';
import { ArrowBtn, GradientButton } from '@/shared/ui/buttons';
import { RegisterFormTitleData, TEXT } from '@/shared/constants/constants';
import ArrowForward from '@/shared/assets/icons/ArrowForward.svg';
import { Prefer } from '@/entities';
import { Tags } from '@prisma/client';

export const RegisterForm = () => {
	const [step, setStep] = useState(1);
	const [tags, setTags] = useState<Tags[]>([]);

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/tags");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setTags(result);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

	const setNextStep = () => setStep(2);
	const setPrevStep = () => setStep(1);

	return (
		<form className={s.form}>
			{step === 1 && (
				<>
					<FormTitle data={RegisterFormTitleData} />
					<div className={s.registerBlock}>
						<InputLogin type={'text'} header={TEXT.UserName} />
						<InputLogin type={'text'} header={TEXT.EmailAdress} />
						<InputLogin type={'password'} header={TEXT.Password} footer={TEXT.PasswordTips} />
						<InputLogin type={'password'} header={TEXT.PasswordConfirm} />
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
					<Prefer tags={ tags } />
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
					<GradientButton to='/'>{TEXT.SignUp}</GradientButton>
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
