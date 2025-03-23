import Image from 'next/image';
import s from './TopImage.module.scss';
import { ImgData } from '../types';

export const TopImage = ({ value, image }: ImgData) => {
	return (
		<div className={s.topImage}>
			<Image src={image} alt="" role="presentation" className={s.image} />
			<div className={s.topImageTextWrapper}>
				<div className={s.topImageText}>{value}</div>
			</div>
			<div className={s.arrowTop} />
		</div>
	);
};
