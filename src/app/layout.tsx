'use client';

import { Montserrat } from 'next/font/google';
import './globals.css';
// import s from './RootLayout.module.scss';
// import { AudioPlayer, MainHeader, MainLogo, MainMenu } from '@/widgets';
// import { TRACK_ITEMS } from '@/shared/constants/constants';

const montserrat = Montserrat({ subsets: ['latin'] });

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body className={montserrat.className}>
			  {children}
			</body>
		</html>
	);
};

export default RootLayout;
