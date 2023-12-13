import { Line } from "./Line";

export class Linebar {
	constructor(
		private tenssion: number,
		private phases: number,
		private input: Line[],
		private output: Line[]
	) { }
};