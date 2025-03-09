import { TEXT } from '@/shared/constants/constants';
import s from './MainLogo.module.scss';

export const MainLogo = () => {
	return <div className={s.mainLogo}>{TEXT.LogoTitle}</div>;
};
