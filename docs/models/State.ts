import { Device } from "./Device";

export class State {
	constructor(
		private name: string, // The state name.
		private description: string, // A short description of what the state means.
		private device: Device // The device that produces the signal.
	) { }
};