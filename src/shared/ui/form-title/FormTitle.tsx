import { FormTitleProps } from '../types';
import s from './FormTitle.module.scss';

export const FormTitle = ({ data }: FormTitleProps) => {
	return (
		<div className={s.formTitle}>
			<div className={s.titleLeft}>{data.left}</div>
			<div className={s.titleRight}>{data.right}</div>
		</div>
	);
};
