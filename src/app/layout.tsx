'use client';

import { Montserrat } from 'next/font/google';
import './globals.css';
import s from './RootLayout.module.scss';
import { AudioPlayer, MainHeader, MainLogo, MainMenu } from '@/widgets';
import { TRACK_ITEMS } from '@/shared/constants/constants';

const montserrat = Montserrat({ subsets: ['latin'] });

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body className={montserrat.className}>
				<div className={s.main}>
					<MainLogo />
					<MainHeader />
					<MainMenu />
					<div className={s.content}>
						<div className={s.mainContent}>{children}</div>
					</div>
					<AudioPlayer tracks={TRACK_ITEMS} />
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
