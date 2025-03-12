'use client';

import Link from 'next/link';
import { GradientButtonProps } from '../type';
import s from './gradient-button.module.scss';

export const GradientButton = ({ children, to, handler }: GradientButtonProps) => {
	const handlerClick = () => handler && handler();

	return (
		<Link href={to} className={s.btnLink}>
		  <div
		    className={s.btnGradient}
		  	role="presentation"
		  	onClick={handlerClick}
		  >
		  	<div className={s.btnText}>
		  	  {children}
		  	</div>
		  </div>
		</Link>
	);
};
