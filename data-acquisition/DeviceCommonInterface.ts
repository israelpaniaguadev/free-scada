// TODO: Extract datatypes from the DB schema.

export default interface DeviceCommonInterface {
  getMeasures: (measures?: ({
    name: string; outputUnit?: string;
  })[]) => Promise<({
    name: string; outputUnit: string; value: number;
  })[]>;
  getAlarms: (alarms?: ({
    name: string;
  })[]) => Promise<({
    name: string;
    wasTriggered: boolean;
  })[]>;
  getSignals: (signals?: ({
    name: string;
  })[]) => Promise<({
    name: string;
    wasTriggered: boolean;
  })[]>;
  getStates: () => Promise<({
    name: string;
  })[]>;
}
