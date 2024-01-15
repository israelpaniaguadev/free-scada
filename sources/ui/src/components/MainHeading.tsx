const MainHeading = ({ children }: { children?: React.ReactNode }) => {
	return (<h1
		className={
			"text-white text-2xl"
		}
	>
		{children}
	</h1>
	);
};

export default MainHeading;