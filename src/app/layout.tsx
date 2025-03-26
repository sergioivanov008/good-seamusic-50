import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '../../providers';

const montserrat = Montserrat({ subsets: ['latin'] });

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ru">
			<Providers>
				<body className={montserrat.className}>{children}</body>
			</Providers>
		</html>
	);
};

export default RootLayout;
