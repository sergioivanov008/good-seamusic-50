import { TrackItem, TrackItemType } from '@/shared/ui/track-item/TrackItem';
import s from './ContentTracks.module.scss';
import trackItemImg from '@/shared/assets/images/track_item_01.png';
import { ContentTitle } from '@/shared/ui';
import { ContentTracksData } from '@/shared/constants/constants';

const TRACK_ITEM_TITLE: TrackItemType = {
	number: '№',
	cover: {
		title: 'Cover',
	},
	name: {
		title: 'Name',
	},
	album: 'Album',
	listens: 'Listens',
	playTime: 'Play time',
	like: '',
	isTitle: true,
};

const TRACK_ITEMS: TrackItemType[] = [
	{
		number: '1',
		cover: {
			title: 'Album cover',
			cover: trackItemImg,
		},
		name: {
			title: 'Los del Espasio',
			author: 'Rusherking',
		},
		album: 'El Espasio',
		listens: '213',
		playTime: '5:38',
		like: '',
	},
	{
		number: '2',
		cover: {
			title: 'Album cover',
			cover: trackItemImg,
		},
		name: {
			title: 'Los del Espasio',
			author: 'Rusherking',
		},
		album: 'El Espasio',
		listens: '213',
		playTime: '5:38',
		like: '',
	},
	{
		number: '3',
		cover: {
			title: 'Album cover',
			cover: trackItemImg,
		},
		name: {
			title: 'Los del Espasio',
			author: 'Rusherking',
		},
		album: 'El Espasio',
		listens: '213',
		playTime: '5:38',
		like: '',
	},
];

export const ContentTracks = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentTracksData} />
			<div className={s.contentMain}>
				<TrackItem data={TRACK_ITEM_TITLE} />
				<div className={s.contentItems}>
					{TRACK_ITEMS.map((item) => (
						<TrackItem key={item.number} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
