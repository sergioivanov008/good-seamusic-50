import { RoleItemProps } from '../types';
import s from './RoleItem.module.scss';

export function RoleItem({ name, role, handler, userRole }: RoleItemProps) {
	const curStyle =
		userRole === role ? `${s.roleItem} ${s.active}` : `${s.roleItem}`;

	const handlerClick = () => handler(role);

	return (
		<div className={curStyle} onClick={handlerClick}>
			{name}
		</div>
	);
}
