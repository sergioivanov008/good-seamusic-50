import Image from 'next/image';
import s from './AlbumItem.module.scss';
import { TEXT } from '@/shared/constants/constants';
import { CircleLike } from '@/shared/ui';
import { AlbumItemProps } from '../types';

export const AlbumItem = ({ data }: AlbumItemProps) => {
	return (
		<div className={s.album}>
			<div className={s.photoAlbum}>
				<Image
					src={data.photo}
					alt={data.title}
					role="presentation"
					className={s.photo}
				/>
			</div>
			<div className={s.albumData}>
				<div className={s.dataValue}>{data.title}</div>
				<div className={s.dataWrapper}>
					<div className={s.dataKey}>{data.title1}</div>
					<div className={s.dataKey}>{data.title2}</div>
				</div>
				<div className={s.playWrapper}>
					<div className={s.dataKey}>{`${TEXT.Plays}:`}</div>
					<div className={s.dataValue}>{data.plays}</div>
				</div>
			</div>
			<div className={s.likeWrapper}>
				<CircleLike />
			</div>
		</div>
	);
};
