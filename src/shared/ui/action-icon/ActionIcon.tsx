import s from './ActionIcon.module.scss';

type ActionIconProps = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const ActionIcon = ({ icon: Icon }: ActionIconProps) => {
	return (
		<div className={s.actionIcon}>
		  <Icon width={40} height={40} />
		</div>
	);
};
