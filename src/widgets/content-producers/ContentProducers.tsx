import s from './ContentProducers.module.scss';
import producerItemImg from '@/shared/assets/images/Producer_item_01.png';
import { ArtistProducerItem, ContentTitle } from '@/shared/ui';
import { ContentProducersData } from '@/shared/constants/constants';

const PRODUCER_ITEMS = [
	{
		id: '1',
		photo: producerItemImg,
		name: 'Rhythmix',
	},
	{
		id: '2',
		photo: producerItemImg,
		name: 'Rhythmix',
	},
	{
		id: '3',
		photo: producerItemImg,
		name: 'Rhythmix',
	},
	{
		id: '4',
		photo: producerItemImg,
		name: 'Rhythmix',
	},
	{
		id: '5',
		photo: producerItemImg,
		name: 'Rhythmix',
	},
	{
		id: '6',
		photo: producerItemImg,
		name: 'Rhythmix',
	},
];

export const ContentProducers = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentProducersData} />
			<div className={s.contentMain}>
				<div className={s.contentItems}>
					{PRODUCER_ITEMS.map((item) => (
						<ArtistProducerItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
