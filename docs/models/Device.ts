import { Alarm } from "./Alarm";
import { Line } from "./Line";
import { Signal } from "./Signal";
import { State } from "./State";

export class Device {
	constructor(
		private name: string,
		private description: string,
		private input: Line,
		private output: Line,
		private states: State[],
		private signals: Signal[],
		private alarms: Alarm[]
	) { }
};