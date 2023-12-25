import { Device } from "./Device";

export class Signal {
	constructor(
		private name: string, // The name of the signal.
		private description: string, // The description of what the signal means.
		private device: Device, // The device that produces the signal.
		private quality: number, // The signal quality.
		private statusValue: number | boolean, // The signal value.
		private isError: boolean // If has an error.
	) { }
};
