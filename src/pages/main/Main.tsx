import {
	ContentArtists,
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
			<div className={s.mainContent}>
				<ContentTop />
				<ContentTracks />
				<ContentArtists />
				<ContentProducers />
				<div className={s.contentBeats}>contentBeats</div>
				<div className={s.contentAlbums}>contentAlbums</div>
				<div className={s.contentPlaylists}>contentPlaylists</div>
			</div>
		</div>
	);
};
