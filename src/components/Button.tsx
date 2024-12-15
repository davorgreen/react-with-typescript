import { MouseEventHandler } from 'react';

interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	type = 'button',
	onClick,
}) => {
	return (
		<button onClick={onClick} className={className} type={type}>
			{children}
		</button>
	);
};

export default Button;
