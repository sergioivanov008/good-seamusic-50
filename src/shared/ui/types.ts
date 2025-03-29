import { StaticImageData } from 'next/image';
import { SignInResponse } from 'next-auth/react';
import { InputLoginKeyType } from '@/widgets/types';

export type ActionIconProps = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	handler?: (() => void) | null;
};

export type ArtistItemType = {
	id: string;
	photo: StaticImageData;
	name: string;
	text: string;
	tags: TagProps[];
};

export type ArtistItemProps = {
	data: ArtistItemType;
};

export type BeatpackItemType = {
	id: string;
	photo: StaticImageData;
	title1: string;
	title2: string;
	plays: string;
	duration: string;
};

export type BeatpackItemProps = {
	data: BeatpackItemType;
};

export type ButtonLoginProps = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	btnText: string;
	handler?: () => Promise<SignInResponse | undefined>;
};

export type ContentTitleType = {
	left: string;
	right: string;
};

export type ContentTitleProps = {
	data: ContentTitleType;
};

export type DividerProps = {
	text: string;
};

export type FormTitleType = {
	left: string;
	right: string;
};

export type FormTitleProps = {
	data: FormTitleType;
};

export type InputType = 'text' | 'password';

export type InputLoginProps = {
	header?: string;
	placeholder?: string;
	footer?: string;
	footerTo?: string;
	isInputPasswordType?: boolean;
	id?: InputLoginKeyType;
	value?: string;
	handler?: (id: InputLoginKeyType, value: string) => void;
	error?: string;
	isTouched?: boolean;
};

export type MenuItemDataType = {
	id: string;
	text: string;
	img: StaticImageData;
	imgWhite: StaticImageData;
};

export type MenuItemType = {
	id?: string;
	data: MenuItemDataType;
	handler?: () => Promise<undefined>;
};

export type PreferItemProps = {
	name: string;
	handler: (prefer: string) => void;
	userPrefer: string[];
};

export type RoleItemProps = {
	name: string;
	role: string;
	handler: (role: string) => void;
	userRole: string;
};

export type TagProps = {
	id: string;
	value: string;
};

export type ImgData = {
	id: string;
	value: string;
	image: StaticImageData;
};

export type TrackItemType = {
	number: string;
	cover: {
		title: string;
		cover?: StaticImageData;
	};
	name: {
		title: string;
		author?: string;
	};
	album: string;
	listens: string;
	playTime: string;
	like: string;
	trackUrl?: string;
	isTitle?: boolean;
};

export type TrackItemProps = {
	data: TrackItemType;
};

export type TempComponentProps = {
	name: string;
};
