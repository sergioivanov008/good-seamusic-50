'use client';

import { GradientButtonProps } from '../type';
import s from './gradient-button.module.scss';
import { useRouter } from 'next/navigation';

export const GradientButton = ({
	children,
	to,
	handler,
	isDisabled = false,
}: GradientButtonProps) => {
	const router = useRouter();

	const curStyle = isDisabled ? `${s.btnGradient} ${s.disabled}` : s.btnGradient;
	const handlerClick = () => {
		if (isDisabled) return;

		handler && handler();
		to && router.push(to);
	};

	return (
		<div className={s.btnLink}>
			<div className={curStyle} role="presentation" onClick={handlerClick}>
				<div className={s.btnText}>{children}</div>
			</div>
		</div>
	);
};
