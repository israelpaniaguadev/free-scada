type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, ...props }: Props) => {

	if (!children) {
		return (
			<div>
			</div>
		);
	}

	return (
		<label
			{...props}
			className={
				"text-sm text-gray-300 font-bold m-2"
			}
		>
			{children}
		</label>
	);
};

export default Label;