import Image from 'next/image';
import s from './PlaylistItem.module.scss';
import { CircleLike } from '@/shared/ui';
import { PlaylistProps } from '../types';

export const PlaylistItem = ({ data }: PlaylistProps) => {
	return (
		<div className={s.playlist}>
			<div className={s.photoAlbum}>
				<Image
					src={data.photo}
					alt={data.title1}
					role="presentation"
					className={s.photo}
				/>
			</div>
			<div className={s.dataWrapper}>
				<div className={s.dataValue}>{data.title1}</div>
				<div className={s.dataValue}>{data.title2}</div>
			</div>
			<div className={s.likeWrapper}>
				<CircleLike />
			</div>
		</div>
	);
};
