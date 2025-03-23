import s from './button-login.module.scss';
import { ButtonLoginProps } from '../types';

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
