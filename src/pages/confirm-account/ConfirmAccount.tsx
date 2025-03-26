import { ConfirmAccountForm } from '@/widgets';
import { Suspense } from 'react';

export const ConfirmAccount = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<ConfirmAccountForm />
		</Suspense>
	);
};
