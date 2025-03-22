import s from './HeaderNav.module.scss';

export const HeaderNav = () => {
	return (
		<div className={s.mainHeaderNav}>
			<div className={s.navBell} />
			<div className={s.navAvatar}>
				<div className={s.avatarName}>Sam</div>
				<div className={s.avatarArrow} />
				<div className={s.avatarFoto} />
			</div>
		</div>
	);
};
