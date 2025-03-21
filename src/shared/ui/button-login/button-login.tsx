import s from './button-login.module.scss';

export type ButtonLoginProps = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	btnText: string;
	handler?: () => void;
};

export const ButtonLogin = ({
	icon: Icon,
	btnText,
	handler,
}: ButtonLoginProps) => {
	const handerClick = () => {
		handler && handler();
	};

	return (
		<div className={s.buttonLogin} onClick={handerClick}>
			<div className={s.content}>
				<Icon width={24} height={24} />
				<div className={s.text}>{btnText}</div>
			</div>
		</div>
	);
};
