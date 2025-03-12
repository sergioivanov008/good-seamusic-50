import {
	AudioPlayer,
	ContentAlbums,
	ContentArtists,
	ContentBeatpacks,
	ContentPlaylists,
	ContentProducers,
	ContentTop,
	ContentTracks,
	MainHeader,
	MainLogo,
	MainMenu,
	ProfileHeader,
} from '@/widgets';
import s from './Main.module.scss';
import { TRACK_ITEMS } from '@/shared/constants/constants';

export const Main = () => {
	return (
		<div className={s.main}>
			<MainLogo />
			<MainHeader />
			<MainMenu />
			<div className={s.content}>
			  <div className={s.mainContent}>
			  	<ContentTop />
			  	<ContentTracks />
			  	<ContentArtists />
			  	<ContentProducers />
			  	<ContentBeatpacks />
			  	<ContentAlbums />
			  	<ContentPlaylists />
			    <ProfileHeader />
			  </div>
			</div>
			<AudioPlayer tracks={TRACK_ITEMS} />
		</div>
	);
};
