import { Tags } from '@prisma/client';
import { StaticImageData } from 'next/image';

export type AlbumItemType = {
	id: string;
	photo: StaticImageData;
	title: string;
	title1: string;
	title2: string;
	plays: string;
};

export type AlbumItemProps = {
	data: AlbumItemType;
};

export type IdValue = {
	id: string;
	value: string;
};

export type TagsType = Record<string, IdValue[]>;

export type ImgData = {
	id: string;
	value: string;
	image: StaticImageData;
};

export type TopImages = {
	id: string;
	data: ImgData;
};

export type PlaylistType = {
	id: string;
	photo: StaticImageData;
	title1: string;
	title2: string;
};

export type PlaylistProps = {
	data: PlaylistType;
};

export type PreferProps = {
	tags: Tags[];
	handler: (prefer: string) => void;
	userPrefer: string[];
};

export type RoleType = {
	id: string;
	name: string;
	role: string;
};

export type RoleProps = {
	role: RoleType[];
	handler: (role: string) => void;
	userRole: string;
};
