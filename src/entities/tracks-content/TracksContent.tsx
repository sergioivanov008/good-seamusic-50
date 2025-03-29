import { GradientButton, TempComponent } from '@/shared/ui';
import s from './TracksContent.module.scss';
import { TEXT } from '@/shared/constants/constants';

export function TracksContent() {
	return (
		<div className={s.tracksContent}>
			<div className={s.header}>
			  <div className={s.left}>
					<TempComponent name='Filter'/>
				</div>
				<GradientButton>{TEXT.AddTrack}</GradientButton>
			</div>
			<div className={s.content}>
			  <TempComponent name='Tracks content'/>
			</div>
		</div>
	);
}
