import { Line } from "./Line";

export class Linebar {
	constructor(
		private tenssion: number, // The tenssion that the linebar can handle.
		private input: Line[], // The list of input lines.
		private output: Line[] // The list of output lines.
	) { }
};