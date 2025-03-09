import s from './AudioPlayer.module.scss';
import ImportedIconShuffle from '@/shared/assets/icons/action_shuffle.svg';
import ImportedIconPrev from '@/shared/assets/icons/action_prev.svg';
import ImportedIconPause from '@/shared/assets/icons/action_pause.svg';
import ImportedIconNext from '@/shared/assets/icons/action_next.svg';
import ImportedIconRepeat from '@/shared/assets/icons/action_repeat.svg';
import ImportedIconMute from '@/shared/assets/icons/action_mute.svg';
import ImportedIconLink from '@/shared/assets/icons/action_link.svg';
import { ActionIcon } from '@/shared/ui';

const IconShuffle: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconShuffle;
const IconPrev: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconPrev;
const IconPause: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconPause;
const IconNext: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconNext;
const IconRepeat: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconRepeat;
const IconMute: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconMute;
const IconLink: React.FC<React.SVGProps<SVGSVGElement>> = ImportedIconLink;

const playerActions = [
	{ id: '1', icon: IconShuffle },
	{ id: '2', icon: IconPrev },
	{ id: '3', icon: IconPause },
	{ id: '4', icon: IconNext },
	{ id: '5', icon: IconRepeat },
];

export const AudioPlayer = () => {
	return (
		<div className={s.audioWrapper}>
		  <div className={s.audioPlayer}>
		  	<div className={s.left}>
		  	  <div className={s.picture}></div>
		  	  <div className={s.titles}>
		  			<div className={s.title1}>Right Now</div>
		  	    <div className={s.title2}>Rio Da Young Og Type Beat</div>
		  		</div>
		  	</div>
		  	<div className={s.center}>
					{playerActions.map((el) => (
						<ActionIcon key={el.id} icon={el.icon} />
					))}
		  	</div>
		  	<div className={s.right}>
				  <ActionIcon icon={IconMute} />
		  	  <div className={s.volumeWrapper}>
						<input type="range" className={s.volume} />
					</div>
				  <ActionIcon icon={IconLink} />
		  	</div>
		  	<div className={s.durationWrapper}>
				  <input type="range" className={s.duration} />
				</div>
		  </div>
		</div>
	);
};
