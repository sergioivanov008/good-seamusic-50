import { RoleItem } from '@/shared/ui';
import s from './Role.module.scss';
import { TEXT } from '@/shared/constants/constants';

type RoleType = {
	id: string;
	name: string;
	role: string;
};

type RoleProps = {
	role: RoleType[];
	handler: (role: string) => void;
	userRole: string;
};

export function Role({ role, handler, userRole }: RoleProps) {
	return (
		<div className={s.roleWrapper}>
			<div className={s.roleTitle}>{TEXT.WhoAreYou}</div>
			<div className={s.role}>
				{role.map((el) => (
					<RoleItem
						key={el.id}
						name={el.name}
						role={el.role}
						handler={handler}
						userRole={userRole}
					/>
				))}
			</div>
		</div>
	);
}
