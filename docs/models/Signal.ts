export class Signal {
	constructor(
		private name: string, // The name of the signal.
		private description: string, // The description of what the signal means.
		private quality: number, // The signal quality.
		private statusValue: number | boolean, // The signal value.
		private isError: boolean // If has an error.
	) { }
};
