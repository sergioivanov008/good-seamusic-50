import { ButtonHTMLAttributes, ReactNode } from 'react';

export type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	variant: 'text' | 'secondary' | 'primary';
	IconLeft?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
	IconRight?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
};

export type GradientButtonProps = {
	text: string;
	to: string;
	handler?: () => void;
};
