const Text = ({ children }: { children?: React.ReactNode }) => {
	if (!children) {
		return <p></p>;
	}

	return (
		<p
			className={
				"text-gray-300 text-sm"
			}
		>
			{children}
		</p>
	);
};

export default Text;