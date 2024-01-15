type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
	if (!children) {
		return <button {...props} />
	}

	return (
		<button
			{...props}
			className={
				"text-gray-300 text-sm p-2 w-fit h-auto bg-black rounded-md border-2 border-gray-300 " +
				"hover:text-white hover:border-white flex justify-center items-center"
			}
		>
			{children}
		</button>
	);
};

export default Button;