import { Device } from "./Device";
import { Linebar } from "./Linebar";
import { Meter } from "./Meter";

export class Line {
	constructor(
		private input: Device | Linebar, // The input device/linebar of the line.
		private attach: Meter[], // The meters attached to the line.
		private output: Device | Linebar, // The output device/linebar of the line.
		private tenssion: number, // The tenssion that the line supports.
		private phases: number, // The number of phases of the line.
	) { }
};