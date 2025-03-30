'use client';

import s from './Modal.module.scss';
import { ModalType } from '../types';


export function Modal({ children }: ModalType) {
	return (
			<div className={s.modal}>{children}</div>
		);
}
