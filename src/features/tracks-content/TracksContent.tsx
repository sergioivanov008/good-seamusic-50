import { GradientButton, TempComponent } from '@/shared/ui';
import s from './TracksContent.module.scss';
import { TEXT } from '@/shared/constants/constants';
import { useAppDispatch } from '../../../store/hooks';
import { userActions } from '../../../store/slices/userSlice';

export function TracksContent() {
	const dispatch = useAppDispatch();

	const handlerOpenModal = () => {
		document.body.style.overflow = 'hidden';
		dispatch(userActions.setIsAddTrackModal(true));
	};

	return (
		<div className={s.tracksContent}>
			<div className={s.header}>
				<div className={s.left}>
					<TempComponent name="Filter" />
				</div>
				<GradientButton handler={handlerOpenModal}>
					{TEXT.AddTrack}
				</GradientButton>
			</div>
			<div className={s.content}>
				<TempComponent name="Tracks content" />
			</div>
		</div>
	);
}
