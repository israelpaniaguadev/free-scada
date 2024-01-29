// The database client will be written on Prisma ORM.

type Measure = {
  magnitude: string;
  unit: string;
  value: number;
};

type State = {
  name: string;
  description: string;
};

type Alarm = {
  name: string;
  description: string;
};

type Signal = {
  name: string;
  description: string;
};

// TODO TCP/IP interface?
// TODO Serial port interface?

interface DeviceCommonInterface {
  name: string;
  description: string;
  networkId: string | number;
  getMetrics: (metrics: ({ magnitude: string; outputUnit: string })[]) => Promise<Measure[]>;
  getSignals: (signals: ({ name: string })[]) => Promise<Signal[]>;
  getAlarms: (alarms: ({ name: string })[]) => Promise<Alarm[]>;
  getStates: (states: ({ name: string })[]) => Promise<State[]>;
}

export default class DataAcquisitionModule {
  devices: DeviceCommonInterface[];
  constructor(devices: DeviceCommonInterface[]) {
    this.devices = devices;
  }
}
