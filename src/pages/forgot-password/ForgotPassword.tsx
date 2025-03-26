import { ForgotPasswordForm } from '@/widgets';
import { Suspense } from 'react';

export const ForgotPassword = () => {
	return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ForgotPasswordForm />
    </Suspense>
  );
};
