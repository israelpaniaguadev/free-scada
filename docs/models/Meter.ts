export class Meter {
	constructor(
		private magnitude: string, // The magnitude meassured by the meter.
		private meassure: number, // The actual value of the meassure.
		private unit: string // The meassurement unit used by the meter.
	) {
	}
};