import s from './ContentArtists.module.scss';
import artistItemImg from '@/shared/assets/images/Artist_item_01.png';
import { ArtistProducerItem, ContentTitle } from '@/shared/ui';
import { ContentArtistsData } from '@/shared/constants/constants';

const ARTIST_ITEMS = [
	{
		id: '1',
		photo: artistItemImg,
		name: 'Tiago PZK',
	},
	{
		id: '2',
		photo: artistItemImg,
		name: 'Tiago PZK',
	},
	{
		id: '3',
		photo: artistItemImg,
		name: 'Tiago PZK',
	},
	{
		id: '4',
		photo: artistItemImg,
		name: 'Tiago PZK',
	},
	{
		id: '5',
		photo: artistItemImg,
		name: 'Tiago PZK',
	},
	{
		id: '6',
		photo: artistItemImg,
		name: 'Tiago PZK',
	},
];

export const ContentArtists = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentArtistsData} />
			<div className={s.contentMain}>
				<div className={s.contentItems}>
					{ARTIST_ITEMS.map((item) => (
						<ArtistProducerItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
