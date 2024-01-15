type Props = React.OptionHTMLAttributes<HTMLOptionElement>;

const Option = ({ children, ...props }: Props) => {
	return (
		<option
			{...props}
			className={
				"w-fit h-auto bg-black text-gray-300 border-2 rounded-md border-gray-300 " +
				"p-2"
			}
		>
			{children}
		</option>
	);
};

export default Option;