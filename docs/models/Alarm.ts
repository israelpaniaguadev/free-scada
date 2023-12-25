import { Device } from "./Device";

export class Alarm {
	constructor(
		private name: string, // An alarm needs an identifier
		private description: string, // An alarm needs a description to make easier to operate.
		private device: Device, // The device that produces the alarm.
	) { }
};