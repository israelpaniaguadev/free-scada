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
				"text-xs text-gray-300 font-bold"
			}
		>
			{children}
		</label>
	);
};

export default Label;