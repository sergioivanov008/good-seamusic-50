import { AuthLeftBlock, LoginForm } from '@/widgets';
import s from './Login.module.scss';

export const Login = () => {
	return (
		<div className={s.login}>
			<AuthLeftBlock />
			<LoginForm />
		</div>
	);
};
