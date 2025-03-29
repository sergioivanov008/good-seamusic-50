'use client';

import s from './ProfileContent.module.scss';
import { TempComponent } from '@/shared/ui';
import { TracksContent } from '@/entities';
import { useAppSelector } from '../../../store/hooks';
import { userSelector } from '../../../store/slices/userSlice';

export const ProfileContent = () => {
	const { tab } = useAppSelector(userSelector);

	const content = () => {
		let tmp = <TempComponent name={tab?.title} />;
		if (tab?.ready) {
			switch (tab?.id) {
				case 2:
					tmp = <TracksContent />;
					break;
				case 4:
					tmp = <TempComponent name={'4'} />;
					break;

				default:
					break;
			}
		}

		return tmp;
	};

	return <div className={s.profileContent}>{content()}</div>;
};
