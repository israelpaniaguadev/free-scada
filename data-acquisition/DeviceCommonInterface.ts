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

export type DeviceCommonParams = {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  model: string;
};

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



