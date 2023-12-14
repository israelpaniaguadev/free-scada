type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
	return (
		<input
			{...props}
			className={
				"m-2 p-2 bg-black text-sm text-gray-300 rounded-md border-2 border-gray-300"
			}
		/>
	);
};

export default Input;