// INFO:
// Datatypes extracted from the database and exported.

export type Alarm = {
  name: string;
  description: string;
};
export type Signal = {
  name: string;
  description: string;
};
export type Measure = {
  measure: string;
  unit: string;
  value: number;
};
export type State = {
  name: string;
  description: string;
  value?: number;
};

// NOTE:
// Device params to use with the specific device protocols.
// They can be ignored or extended for each implementation.

export type DeviceCommonParams = {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  model: string;
};

// INFO:
// The device common interface.
// The data is extracted from the database schema.
// Every device must return a set of measures, 
// current states, alarms, and signals.

export interface DeviceCommonInterface {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  model: string;
  getMeasures(): Measure[];
  getCurrentStates(): State[];
  getAlarms(): Alarm[];
  getSignals(): Signal[];
}



