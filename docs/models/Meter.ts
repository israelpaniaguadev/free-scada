export class Meter {

	getMeassure(): number {
		return this.meassure;
	}

	// setMeassure? -> toma las medidas de una línea.

	constructor(private magnitude: string, private meassure: number, private unit: string) {
	}
};