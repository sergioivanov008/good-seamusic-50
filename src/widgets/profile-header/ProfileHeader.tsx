'use client';

import { MainBtn } from '@/shared/ui/buttons';
import s from './ProfileHeader.module.scss';
import { PROFILE_TEMP_DATA } from '@/shared/constants/constants';
import { ProfileContent } from '@/features';
import { useState } from 'react';
import { ProfileTabType } from '../types';

export const ProfileHeader = () => {
	const [profileTab, setProfileTab] = useState<ProfileTabType>(
		PROFILE_TEMP_DATA.navigationLink[0]
	);

	const navigationLinkStyle = (num: number) =>
		num === profileTab.id
			? `${s.navigationLink} ${s.active}`
			: s.navigationLink;

	const handlerClickTab = (tab: ProfileTabType) => setProfileTab(tab);

	return (
		<div className={s.profileHeader}>
			<div className={s.header}>
				<div className={s.headerTop}></div>
				<div className={s.headerBottom}>
					<div className={s.profileBtns}>
						{PROFILE_TEMP_DATA.profileBtns.map((el, index) => (
							<MainBtn key={index} variant={'blackWhite'}>
								{el}
							</MainBtn>
						))}
					</div>
					<div className={s.profileInfo}>
						{PROFILE_TEMP_DATA.profileInfo.map((el, index) => (
							<div key={index} className={s.profileInfoItem}>
								{el}
							</div>
						))}
					</div>
				</div>
				<div className={s.headerAvatar}></div>
			</div>
			<div className={s.footer}>
				<div className={s.userInfo}>
					<div className={s.infoTitle}>
						<div className={s.name}>{PROFILE_TEMP_DATA.text.name}</div>
						<div className={s.login}>{PROFILE_TEMP_DATA.text.login}</div>
					</div>
					<div className={s.infoContent}>
						<div className={s.contentDescription}>
							{PROFILE_TEMP_DATA.text.contentDescription}
						</div>
						<div className={s.contentBtns}>
							{PROFILE_TEMP_DATA.profileBtns.map((el, index) => (
								<MainBtn key={index} variant={'blackWhite'}>
									{el}
								</MainBtn>
							))}
						</div>
					</div>
				</div>
				<div className={s.userBanner}></div>
			</div>
			<div className={s.navigation}>
				{PROFILE_TEMP_DATA.navigationLink.map((el) => (
					<div
						key={el.id}
						className={navigationLinkStyle(el.id)}
						onClick={() => handlerClickTab(el)}>
						{el.title}
					</div>
				))}
			</div>
			<ProfileContent tab={profileTab} />
		</div>
	);
};
