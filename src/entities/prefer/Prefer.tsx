import s from './Prefer.module.scss';
import { PreferItem } from '@/shared/ui';
import { TEXT } from '@/shared/constants/constants';
import { PreferProps } from '../types';

export function Prefer({ tags, handler, userPrefer }: PreferProps) {
	return (
		<div className={s.preferWrapper}>
			<div className={s.preferTitle}>{TEXT.YouPrefer}</div>
			<div className={s.prefer}>
				{tags.map((el) => (
					<PreferItem
						key={el.id}
						name={el.tag_name}
						handler={handler}
						userPrefer={userPrefer}
					/>
				))}
			</div>
		</div>
	);
}
