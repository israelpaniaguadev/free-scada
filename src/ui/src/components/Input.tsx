type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
	return (
		<button
			{...props}
			className={
				""
			}
		>
			{children}
		</button>
	);
};

export default Button;