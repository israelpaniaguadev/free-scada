import { useState } from "react";
import { useSessionStore, SessionStore } from "../stores/Session";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const LoginForm = () => {

	const session: SessionStore = useSessionStore();

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const submitLogin = async () => {
		session.startSession(username, password);
	};

	if (!session.name) {
		return (
			<div
				className={
					"flex items-start justify-center flex-col " +
					"w-fit h-auto border-2 border-gray-300 rounded-md p-4"
				}
			>
				<div
					className={
						"flex items-center justify-start flex-row " +
						"w-full h-auto "
					}
				>
					<Label htmlFor="username">
						Username:
					</Label>
					<Input type="text" name="username" id="username" onChange={(t) => setUsername(t.target.value)} />
				</div>
				<div
					className={
						"flex items-center justify-start flex-row " +
						"w-full h-auto "
					}
				>
					<Label htmlFor="password">
						Password:
					</Label>
					<Input type="password" name="password" id="password" onChange={(t) => setPassword(t.target.value)} />
				</div>
				<div
					className="self-end"
				>
					<Button type="submit" onClick={submitLogin}>
						Login
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div
			className={
				"w-full min-h-screen m-0 p-4 flex-1 flex-col items-center justify-center gap-4 bg-black text-gray-300"
			}
		>

		</div>
	);
};

export default LoginForm;