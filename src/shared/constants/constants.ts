import trackItemImg from '@/shared/assets/images/track_item_01.png';

import ImportedIconShuffle from '@/shared/assets/icons/action_shuffle.svg';
import ImportedIconPrev from '@/shared/assets/icons/action_prev.svg';
import ImportedIconPause from '@/shared/assets/icons/action_pause.svg';
import ImportedIconPlay from '@/shared/assets/icons/action_play.svg';
import ImportedIconNext from '@/shared/assets/icons/action_next.svg';
import ImportedIconRepeat from '@/shared/assets/icons/action_repeat.svg';
import ImportedIconMute from '@/shared/assets/icons/action_mute.svg';
import ImportedIconSound from '@/shared/assets/icons/action_sound.svg';
import ImportedIconLink from '@/shared/assets/icons/action_link.svg';
import imgHomeImage from '@/shared/assets/icons/home_line.svg?url';
import imgHomeImageWhite from '@/shared/assets/icons/home_line_white.svg?url';
import imgMessagesImage from '@/shared/assets/icons/messages_line.svg?url';
import imgMessagesImageWhite from '@/shared/assets/icons/messages_line_white.svg?url';
import imgDashboardImage from '@/shared/assets/icons/dashboard_line.svg?url';
import imgDashboardImageWhite from '@/shared/assets/icons/dashboard_line_white.svg?url';
import imgPlaylistsImage from '@/shared/assets/icons/playlists_line.svg?url';
import imgPlaylistsImageWhite from '@/shared/assets/icons/playlists_line_white.svg?url';
import imgSettingsImage from '@/shared/assets/icons/settings_line.svg?url';
import imgSettingsImageWhite from '@/shared/assets/icons/settings_line_white.svg?url';
import imgLogoutImage from '@/shared/assets/icons/logout_line.svg?url';
import imgLogoutImageWhite from '@/shared/assets/icons/logout_line_white.svg?url';
import { MenuItemDataType, MenuItemType, TrackItemType } from '../ui/types';

type MainMenuItems = {
	menuMainItems: Array<MenuItemType>;
	menuSettingsItems: Array<MenuItemType>;
	logOutBtn: MenuItemDataType;
};

const IconShuffle: React.FC<React.SVGProps<SVGSVGElement>> =
	ImportedIconShuffle;
const IconPrev: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconPrev;
const IconPause: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconPause;
const IconPlay: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconPlay;
const IconNext: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconNext;
const IconRepeat: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconRepeat;
const IconMute: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconMute;
const IconSound: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconSound;
const IconLink: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconLink;

export const TEXT = {
	LogoTitle: 'SeaMusic',
	AuthLeftBlockTitle: 'Self-expression for everyone',
	SignIn: 'Sign in',
	LogInGooglePlaceholder: 'Continue with Google',
	LogInSpotifyPlaceholder: 'Continue with Spotify',
	EmailAdress: 'Email adress',
	Password: 'Password',
	PasswordTips:
		'Use 8 or more characters with a mix of latin letters, capitalize letters, numbers & symbols',
	PasswordConfirm: 'Confirm your password',
	LastStep: 'Last Step',
	HaveAcc: 'Already have an account? ',
	WhoAreYou: 'Who are you?',
	YouPrefer: 'What do you prefer in music?',
	Terms_1: 'By creating an account, I agree to our ',
	Terms_2: 'Terms of use ',
	Terms_3: 'and ',
	Terms_4: 'Privacy Policy ',
	ForgetPass: 'Forget your password',
	DontHaveAcc: 'Don’t have an account?',
	SignUp: 'Sign up',
	OR: 'OR',
	UserName: 'User Name',
	SeeAll: 'See all',
	Tracks: 'Tracks of the Day',
	Artists: 'Popular artists',
	Producers: 'Popular producers',
	Beatpacks: 'Beatpacks',
	Plays: 'Plays',
	Duration: 'Duration',
	Albums: 'Albums',
	Playlists: 'Playlists',
	StartTime: '-- : --',
	ConfirmAccount: 'Confirm account',
	ConfirmText:
		'We sent to your email letter with code for confirm your account. Please check your email ',
	ConfirmTextExpires: '. Code expired in 10 minutes.',
	Code: 'Code',
	ForgotPassword: 'Forgot password',
	Confirm: 'Confirm',
	ConfirmAccountOk:
		'Congratulations! Your account is now verified and you can log in.',
	Login: 'Log In',
	WriteEmail:
		'Write your email related with your account on SeaMusic, we’ll send you link to restoration your password',
	Email: 'Email',
	Send: 'Send',
	CheckEmail:
		'Password change instructions have been sent to the email you provided. Please check your inbox and follow the instructions.',
	SetNewPassword: 'Set new password',
	ConfirmNewPasswordOk:
		'Congratulations! You have changed your password and can now log in with your new password.',
	AddTrack: '+ Add Track',
};

export const LoginFormTitleData = { left: TEXT.SignIn, right: TEXT.LogoTitle };

export const RegisterFormTitleData = {
	left: TEXT.SignUp,
	right: TEXT.LogoTitle,
};

export const ConfirmAccountFormData = {
	left: TEXT.ConfirmAccount,
	right: TEXT.LogoTitle,
};

export const ForgotPasswordFormData = {
	left: TEXT.ForgotPassword,
	right: TEXT.LogoTitle,
};

export const ContentTracksData = { left: TEXT.Tracks, right: TEXT.SeeAll };

export const ContentArtistsData = { left: TEXT.Artists, right: TEXT.SeeAll };

export const ContentProducersData = {
	left: TEXT.Producers,
	right: TEXT.SeeAll,
};

export const ContentBeatpacksData = {
	left: TEXT.Beatpacks,
	right: TEXT.SeeAll,
};

export const ContentAlbumsData = { left: TEXT.Albums, right: TEXT.SeeAll };

export const ContentPlaylistsData = {
	left: TEXT.Playlists,
	right: TEXT.SeeAll,
};

export const TRACK_ITEM_TITLE: TrackItemType = {
	number: '№',
	cover: {
		title: 'Cover',
	},
	name: {
		title: 'Name',
	},
	album: 'Album',
	listens: 'Listens',
	playTime: 'Play time',
	like: '',
	isTitle: true,
};

export const TRACK_ITEMS: TrackItemType[] = [
	{
		number: '1',
		cover: {
			title: 'Album cover',
			cover: trackItemImg,
		},
		name: {
			title: 'Los del Espasio',
			author: 'Rusherking',
		},
		album: 'El Espasio',
		listens: '213',
		playTime: '5:38',
		like: '',
		trackUrl:
			'https://storage.yandexcloud.net/seamusic-backet/beats/%23%231%20CATACLYZM%20165BPM%20@WHYSPACY%20@STRALLER.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEDfM0GTxK0zSBvKGgjTso%2F20250316%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250316T145111Z&X-Amz-Expires=2592000&X-Amz-Signature=9B21045B126D0BBF060E67E65424338581091C52B7C347875FECCFB1800E27FC&X-Amz-SignedHeaders=host',
	},
	{
		number: '2',
		cover: {
			title: 'Album cover',
			cover: trackItemImg,
		},
		name: {
			title: 'Safer',
			author: 'TYLA',
		},
		album: 'TYLA',
		listens: '213',
		playTime: '5:38',
		like: '',
		trackUrl:
			'https://storage.yandexcloud.net/seamusic-backet/beats/%23%232%20EUPHORIA%20158BPM%20@WHYSPACY%20@14BAGCHASER%20@INSOFAZE.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEDfM0GTxK0zSBvKGgjTso%2F20250316%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250316T145137Z&X-Amz-Expires=2592000&X-Amz-Signature=90B9CEC71D7486DAEE3BCEA3E2CE58E7B2774DC806956804279BA6BB4EECFA6E&X-Amz-SignedHeaders=host',
	},
	{
		number: '3',
		cover: {
			title: 'Album cover',
			cover: trackItemImg,
		},
		name: {
			title: 'Llamando',
			author: 'Julieta Rada, iLe',
		},
		album: 'Julieta Rada, iLe',
		listens: '213',
		playTime: '5:38',
		like: '',
		trackUrl:
			'https://storage.yandexcloud.net/seamusic-backet/beats/%23%232%20EUPHORIA%20158BPM%20@WHYSPACY%20@14BAGCHASER%20@INSOFAZE.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEDfM0GTxK0zSBvKGgjTso%2F20250316%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250316T145137Z&X-Amz-Expires=2592000&X-Amz-Signature=90B9CEC71D7486DAEE3BCEA3E2CE58E7B2774DC806956804279BA6BB4EECFA6E&X-Amz-SignedHeaders=host',
	},
];

export const AUDIO_ICONS = {
	IconShuffle,
	IconPrev,
	IconPause,
	IconPlay,
	IconNext,
	IconRepeat,
	IconMute,
	IconSound,
	IconLink,
};

export const ROLE_LIST = [
	{ id: '1', name: 'Artist', role: 'artist' },
	{ id: '2', name: 'Producer', role: 'producer' },
	{ id: '3', name: 'Listener', role: 'listener' },
];

export const MAIN_MENU_ITEMS: MainMenuItems = {
	menuMainItems: [
		{
			id: '001',
			data: {
				id: '001',
				text: 'Home',
				img: imgHomeImage,
				imgWhite: imgHomeImageWhite,
			},
		},
		{
			id: '002',
			data: {
				id: '002',
				text: 'Messages',
				img: imgMessagesImage,
				imgWhite: imgMessagesImageWhite,
			},
		},
		{
			id: '003',
			data: {
				id: '003',
				text: 'Dashboard',
				img: imgDashboardImage,
				imgWhite: imgDashboardImageWhite,
			},
		},
		{
			id: '004',
			data: {
				id: '004',
				text: 'Playlists',
				img: imgPlaylistsImage,
				imgWhite: imgPlaylistsImageWhite,
			},
		},
	],
	menuSettingsItems: [
		{
			id: '005',
			data: {
				id: '005',
				text: 'Settings',
				img: imgSettingsImage,
				imgWhite: imgSettingsImageWhite,
			},
		},
	],
	logOutBtn: {
		id: '006',
		text: 'Log out',
		img: imgLogoutImage,
		imgWhite: imgLogoutImageWhite,
	},
};

export const EMAIL_CODE_LENGTH = 6;

export const PROFILE_TEMP_DATA = {
	profileBtns: ['Edit profile', 'Share profile', 'Settings'],
	profileInfo: ['25 Subscribers', '3850 Plays'],
	navigationLink: [
		{ id: 0, title: 'Main', ready: false },
		{ id: 1, title: 'Activity', ready: false },
		{ id: 2, title: 'Tracks', ready: true },
		{ id: 3, title: 'Albums', ready: false },
		{ id: 4, title: 'Beats', ready: true },
		{ id: 5, title: 'Beatpacks', ready: false },
		{ id: 6, title: 'Playlists', ready: false },
	],
	text: {
		name: 'Sam Mattal',
		login: '@sammattmusic',
		contentDescription:
			'Hey, I’m Sam—an artist blending indie vibes with the grooves of house and deep house. I create music to move both your heart and your feet. Let’s vibe together 🤙',
	},
};
