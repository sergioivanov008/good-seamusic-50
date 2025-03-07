import { AuthLeftBlock, RegisterForm } from '@/widgets';
import s from './Register.module.scss';

export const Register = () => {
	return (
		<div className={s.register}>
			<AuthLeftBlock />
			<RegisterForm />
		</div>
	);
};
