'use client';

import s from './AddTrackModal.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { userSelector } from '../../../store/slices/userSlice';
import { GradientButton } from '@/shared/ui';
import { Modal } from '@/features';

export function AddTrackModal() {
	const { isAddTrackModal } = useAppSelector(userSelector);

	return (
		isAddTrackModal && (
			<Modal>
				<div className={s.modalForm}>
					<div className={s.title}>Upload your track</div>
					<div className={s.item}>
						<input type="text" />
						<div className={s.text}>Type track name</div>
					</div>
					<div className={s.item}>
						<input type="file" />
						<div className={s.text}>Choose track cover</div>
					</div>
					<div className={s.item}>
						<input type="file" />
						<div className={s.text}>Choose track file</div>
					</div>
					<div className={s.btnWrapper}>
						<GradientButton>{'Upload track'}</GradientButton>
					</div>
					<div className={s.modalClose}>X</div>
				</div>
			</Modal>
		)
	);
}
