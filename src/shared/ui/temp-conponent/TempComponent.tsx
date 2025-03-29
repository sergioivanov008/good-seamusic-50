import { TempComponentProps } from '../types';
import s from './TempComponent.module.scss';

export const TempComponent = ({ name }: TempComponentProps) => {
	return (
		<div className={s.tempComponent}>
			<div className={s.text}>
				{`Component ${name} is under construction...`}
			</div>
		</div>
	);
};
