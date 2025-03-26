'use client';

import s from './NavItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MenuItemType } from '../types';

export const NavItem = ({ data, handler }: MenuItemType) => {
	const [isCurElHover, setIsCurElHover] = useState(false);

	const handlerIsCurElHover = () => {
		setIsCurElHover(!isCurElHover);
	};

	const curImgSrc = (): StaticImageData => {
		return isCurElHover ? data.imgWhite : data.img;
	};

	const handlerClick = () => {
		console.log('handlerClick');
		handler && handler();
	};

	return (
		<div
			className={s.navItem}
			onMouseEnter={handlerIsCurElHover}
			onMouseLeave={handlerIsCurElHover}
			onClick={handlerClick}>
			<Image
				src={curImgSrc()}
				alt=""
				role="presentation"
				className={s.imgTopLeft}
			/>
			<Link href="/" className={s.navItemText}>
				{data.text}
			</Link>
		</div>
	);
};
