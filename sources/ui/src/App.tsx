import Modal from "./components/Modal";
import Text from "./components/Text";


const App = () => {
	return (
		<div
			className={
				"w-screen h-screen m-0 p-4 flex items-center justify-center gap-4 bg-black text-gray-300"
			}
		>
			<Modal openBtn="Login" title="Alert">
				<Text>
					Want to close the program?
				</Text>
			</Modal>
		</div>
	);
};

export default App;