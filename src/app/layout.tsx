'use client';

import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
