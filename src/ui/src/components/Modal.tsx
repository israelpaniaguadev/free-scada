import Button from "./Button";
import { useState } from "react";
import Heading from "./Heading";

const Modal = ({ children, title, closeBtn, openBtn }: { children?: React.ReactNode, title: string, closeBtn?: string, openBtn: string }) => {

	const [visible, setVisible] = useState<boolean>(false);

	if (!visible) {
		return (
			<Button onClick={() => setVisible(true)} >
				{openBtn}
			</Button>
		);
	}
	return (
		<div
			className={
				"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" +
				"bg-black rounded-md border-2 border-gray-300 w-fit h-auto p-4 flex flex-col gap-2 "

			}
		>
			<div
				className="flex flex-grow-1 flex-row gap-4"
			>
				<Heading>
					{title}
				</Heading>
				<Button onClick={() => setVisible(false)} style={{ aspectRatio: "1 / 1" }} >
					{closeBtn ? closeBtn : "X"}
				</Button>
			</div>
			<div>
				{children ? children : <></>}
			</div>
		</div>
	);
};

export default Modal;