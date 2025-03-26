import { PreferItemProps } from '../types';
import s from './PreferItem.module.scss';

export const PreferItem = ({ name, handler, userPrefer }: PreferItemProps) => {
	let curStyle = '';
	if (userPrefer.length && userPrefer.includes(name)) {
		curStyle = `${s.preferItem} ${s.active}`;
	} else {
		curStyle = `${s.preferItem}`;
	}

	const handlerClick = () => handler(name);

	return (
		<div className={curStyle} onClick={handlerClick}>
			{name}
		</div>
	);
};
