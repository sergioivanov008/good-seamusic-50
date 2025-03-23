import { ContentTitleProps } from '../types';
import s from './ContentTitle.module.scss';

export const ContentTitle = ({ data }: ContentTitleProps) => {
	return (
		<div className={s.title}>
			<div className={s.left}>{data.left}</div>
			<div className={s.right}>{data.right}</div>
		</div>
	);
};
