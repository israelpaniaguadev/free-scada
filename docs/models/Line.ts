import { Device } from "./Device";
import { Linebar } from "./Linebar";
import { Meter } from "./Meter";

export class Line {
	constructor(
		private input: Device,
		private attach: Meter[],
		private output: Device | Linebar,
		private tenssion: number
	) { }
};