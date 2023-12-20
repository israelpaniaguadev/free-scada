import { Alarm } from "./Alarm";
import { Line } from "./Line";
import { Signal } from "./Signal";
import { State } from "./State";

export class Device {
	constructor(
		private name: string, // Name of the device.
		private description: string, // A short description of what a device does.
		private input: Line, // An input line reference.
		private output: Line, // An output line reference.
		private states: State[], // A list of the possible states of the device.
		private signals: Signal[], // A list of of the possible signals that the device can emit.
		private alarms: Alarm[] // A list of the possible alarms the device can emit.
	) { }
};