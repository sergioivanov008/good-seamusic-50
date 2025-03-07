import Image, { StaticImageData } from 'next/image';
import s from './ArtistProducerItem.module.scss';

type ArtistItemType = {
	id: string,
	photo: StaticImageData,
	name: string,
};

type ArtistItemProps = {
	data: ArtistItemType;
};

export const ArtistProducerItem = ({ data }: ArtistItemProps) => {
	return (
		<div className={s.artist}>
			<div className={s.photoArtist}>
			  <Image
					src={data.photo}
					alt={data.name}
					role="presentation"
					className={s.photo}
				/>
			</div>
			<div className={s.name}>{data.name}</div>
		</div>
	);
};
