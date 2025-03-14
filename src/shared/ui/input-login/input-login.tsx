import Link from 'next/link';
import s from './input-login.module.scss';

export type InputType = 'text' | 'password';

export type InputLoginProps = {
	type: InputType;
	header?: string;
	placeholder?: string;
	footer?: string;
	footerTo?: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const InputLogin = ({
	type,
	header,
	placeholder = '',
	footer,
	footerTo,
	icon: Icon,
}: InputLoginProps) => {
	return (
		<div className={s.loginInput}>
			{header && <div className={s.inputHeader}>{header}</div>}
			<input className={s.formInput} type={type} placeholder={placeholder} />
			{footer && footerTo && (
				<div className={s.inputFooterLink}>
					<Link href={footerTo} className={s.linkUnderline}>
						{footer}
					</Link>
				</div>
			)}
			{footer && !footerTo && <div className={s.inputFooterText}>{footer}</div>}
			{Icon && (
				<div className={s.imgLogoInput}>
					<Icon width={24} height={24} />
				</div>
			)}
		</div>
	);
};
