export class Device {
	constructor(
		private id: number,
		private name: string,
		private description: string,
		private states: State[],
		private signals: Signal[],
		private alarms: Alarm[]
	) { }
};