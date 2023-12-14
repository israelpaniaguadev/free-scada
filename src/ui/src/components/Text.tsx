const Text = ({ children }: { children?: React.ReactNode }) => {
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