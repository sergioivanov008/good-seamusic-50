import { TrackItemType } from "../ui/track-item/TrackItem";
import trackItemImg from '@/shared/assets/images/track_item_01.png';

export const TEXT = {
  LogoTitle: 'SeaMusic',
  AuthLeftBlockTitle: 'Self-expression for everyone',
  SignIn: 'Sign in',
  LogInGooglePlaceholder: 'Continue with Google',
  LogInSpotifyPlaceholder: 'Continue with Spotify',
  EmailAdress: 'Email adress',
  Password: 'Password',
  PasswordTips: 'Use 8 or more characters with a mix of letters, numbers & symbols',
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
	StartTime: '00 : 00',
};

export const PREFER_TEXT = [
	'Deep house',
	'Trap',
	'Minimal',
	'Indie rock',
	'Metal',
	'Mitol',
	'Funk',
	'Electronica',
	'Rock',
	'Chill-wave',
	'NU Disco',
	'NE Disco',
	'Acoustic',
	'Folk',
	'Lo-fi',
	'Indie-pop',
	'Indee-pop',
];

export const LoginFormTitleData = { left: TEXT.SignIn, right: TEXT.LogoTitle };

export const RegisterFormTitleData = { left: TEXT.SignUp, right: TEXT.LogoTitle };

export const ContentTracksData = { left: TEXT.Tracks, right: TEXT.SeeAll };

export const ContentArtistsData = { left: TEXT.Artists, right: TEXT.SeeAll };

export const ContentProducersData = { left: TEXT.Producers, right: TEXT.SeeAll };

export const ContentBeatpacksData = { left: TEXT.Beatpacks, right: TEXT.SeeAll };

export const ContentAlbumsData = { left: TEXT.Albums, right: TEXT.SeeAll };

export const ContentPlaylistsData = { left: TEXT.Playlists, right: TEXT.SeeAll };

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
    trackUrl: 'https://dl.musopen.org/recordings/52c86549-d92f-42de-84c3-47bd2d2aa9d5.mp3',
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
    trackUrl: 'https://dl.musopen.org/recordings/2ecdca91-7714-4e22-a4b1-aa7009de3879.mp3',
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
    trackUrl: 'https://dl.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3',
	},
];
