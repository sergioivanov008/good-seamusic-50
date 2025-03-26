import { TagProps } from '../types';
import s from './Tag.module.scss';

export const Tag = ({ value }: TagProps) => {
	return <div className={s.tag}>{`#${value}`}</div>;
};
