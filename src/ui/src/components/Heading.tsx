const Heading = ({ children }: { children?: React.ReactNode }) => {
	return (
		<h3
			className={
				"text-white text-xl"
			}
		>
			{children}
		</h3>
	);
};

export default Heading;