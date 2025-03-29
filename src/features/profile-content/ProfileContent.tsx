import s from './ProfileContent.module.scss';
import { ProfileContentProps } from '../types';
import { TempComponent } from '@/shared/ui';

export const ProfileContent = ({ tab }: ProfileContentProps) => {
	console.log('ProfileContent tab: ', tab);
	const content = () => {
		let tmp = <TempComponent name={tab.title} />
		if (tab.ready) {
			switch (tab.id) {
				case 2:
					tmp = <TempComponent name={'2'} />
					break;
				case 4:
					tmp = <TempComponent name={'4'} />
					break;

				default:
					break;
			}
		}

		return tmp;
	};

	return <div className={s.profileContent}>{content()}</div>;
};
