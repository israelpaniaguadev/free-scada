type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ children, ...props }: Props) => {
	return (
		<select
			{...props}
			className={
				"w-fit h-auto bg-black text-gray-300 border-2 rounded-md border-gray-300 " +
				"p-2 "
			}
		>
			{children}
		</select>
	);
};

export default Select;