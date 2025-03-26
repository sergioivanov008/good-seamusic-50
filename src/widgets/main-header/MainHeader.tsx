'use client';

import { useSession } from 'next-auth/react';
import s from './MainHeader.module.scss';
import { HeaderNav } from '@/features';
import { GradientButton } from '@/shared/ui/buttons';
import { TEXT } from '@/shared/constants/constants';

export const MainHeader = () => {
	const session = useSession();

	return (
		<div className={s.mainHeader}>
			<div className={s.mainHeaderWrapper}>
				<div className={s.mainHeaderSearch}>
					<input className={s.headerSearch} type="text" placeholder="Search" />
					<div className={s.searchLogo} />
				</div>
				{session.data ? (
					<HeaderNav />
				) : (
					<GradientButton to="/login">{TEXT.SignIn}</GradientButton>
				)}
			</div>
		</div>
	);
};
