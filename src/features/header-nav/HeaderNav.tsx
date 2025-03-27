import { HeaderNavProps } from '../types';
import s from './HeaderNav.module.scss';

export const HeaderNav = ({ userName }: HeaderNavProps) => {
	return (
		<div className={s.mainHeaderNav}>
			<div className={s.navBell} />
			<div className={s.navAvatar}>
				<div className={s.avatarName}>{userName}</div>
				<div className={s.avatarArrow} />
				<div className={s.avatarFoto} />
			</div>
		</div>
	);
};
