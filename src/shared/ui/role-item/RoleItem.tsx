import s from './RoleItem.module.scss';

type RoleItemProps = {
	name: string;
	role: string;
	handler: (role: string) => void;
	userRole: string;
};

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
