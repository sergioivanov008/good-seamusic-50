import { SignInResponse } from 'next-auth/react';
import s from './button-login.module.scss';

export type ButtonLoginProps = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	btnText: string;
	handler?: () => Promise<SignInResponse | undefined>;
};

export const ButtonLogin = ({
	icon: Icon,
	btnText,
	handler,
}: ButtonLoginProps) => {
	const handlerClick = () => {
		handler && handler();
	};

	return (
		<div className={s.buttonLogin} onClick={handlerClick}>
			<div className={s.content}>
				<Icon width={24} height={24} />
				<div className={s.text}>{btnText}</div>
			</div>
		</div>
	);
};
