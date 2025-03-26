'use client';

import Image from 'next/image';
import navImgSrc from '@/shared/assets/images/Frame 30.png';
import s from './MainMenu.module.scss';
import { NavItem } from '@/shared/ui';
import { MAIN_MENU_ITEMS } from '@/shared/constants/constants';
import { signOut, useSession } from 'next-auth/react';

export const MainMenu = () => {
	const session = useSession();
	const handlerSignOut = () => signOut({ redirectTo: '/' });

	return (
		<div className={s.mainMenu}>
			<div className={s.menuNav}>
				<div className={s.navImage}>
					<Image
						src={navImgSrc}
						alt=""
						role="presentation"
						className={s.imgTop}
					/>
					<div className={s.navTitleWrapper}>
						<div className={s.navTitle}>Top release</div>
					</div>
				</div>
				<div className={s.navItems}>
					{MAIN_MENU_ITEMS.menuMainItems.map((el) => (
						<NavItem key={el.id} id={el.id} data={el.data} />
					))}
				</div>
			</div>
			{session.data && (
				<div className={s.navItems}>
					{MAIN_MENU_ITEMS.menuSettingsItems.map((el) => (
						<NavItem key={el.id} id={el.id} data={el.data} />
					))}
					<NavItem data={MAIN_MENU_ITEMS.logOutBtn} handler={handlerSignOut} />
				</div>
			)}
		</div>
	);
};
