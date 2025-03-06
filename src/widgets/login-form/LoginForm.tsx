import Link from 'next/link';
import s from './LoginForm.module.scss';
import { Divider, FormTitle } from '@/shared/ui';
import IconGoogle from '@/shared/assets/icons/SocialMediaLogoGoogle.svg';
import IconSpotify from '@/shared/assets/icons/SocialMediaLogoSpotify.svg';
import { LoginFormTitleData, TEXT } from '@/shared/constants/constants';

export const LoginForm = () => {
	return (
		<form className={s.form}>
			<FormTitle data={LoginFormTitleData} />
			<div className={s.loginBlock}>
				<div className={s.loginInput}>
				  <input
				  	className={s.formInput}
				  	type="text"
				  	placeholder={TEXT.LogInGooglePlaceholder}
				  />
					<div className={s.imgLogoInput}>
						<IconGoogle width={24} height={24} />
					</div>
				</div>
				<div className={s.loginInput}>
				  <input
				  	className={s.formInput}
				  	type="text"
				  	placeholder={TEXT.LogInSpotifyPlaceholder}
				  />
					<div className={s.imgLogoInput}>
						<IconSpotify width={24} height={24} />
					</div>
				</div>
			</div>
			<Divider text={TEXT.OR} />
			<div className={s.loginBlock}>
				<div className={s.loginInput}>
					<div className={s.inputHeader}>{TEXT.EmailAdress}</div>
					<input className={s.formInput} type="text" placeholder="" />
				</div>
				<div className={s.loginInput}>
					<div className={s.inputHeader}>{TEXT.Password}</div>
					<input className={s.formInput} type="text" placeholder="" />
					<div className={s.inputFooter}>
						<Link href="/" className={s.linkUnderline}>
						  {TEXT.ForgetPass}
						</Link>
					</div>
				</div>
			</div>
			<Link href="/">
				<button className={s.btnAuth} role="presentation">
					{TEXT.SignIn}
				</button>
			</Link>
			<div className={s.signUpLine}>
				<div>{TEXT.DontHaveAcc}</div>
				<Link href="/register" className={s.linkUnderline}>
					{TEXT.SignUp}
				</Link>
			</div>
		</form>
	);
};
