interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	type = 'button',
}) => {
	return (
		<button className={className} type={type}>
			{children}
		</button>
	);
};

export default Button;
