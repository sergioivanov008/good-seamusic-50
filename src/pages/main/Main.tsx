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
} from '@/widgets';
import s from './Main.module.scss';

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
			  </div>
			</div>
			<AudioPlayer />
		</div>
	);
};
