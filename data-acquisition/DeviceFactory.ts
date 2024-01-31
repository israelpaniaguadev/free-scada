// TODO: 
// Create device factory to implement DI pattern in the module.

import type { DeviceCommonInterface, DeviceCommonParams, Measure, Alarm, Signal, State } from "./DeviceCommonInterface";

// TODO:
// Create DeviceCommonInterface implementations for every protocol.

// HACK:
// Need to extract the different implementations to external files.

// WARN:
// This is an mock device implementation.

class MockDevice implements DeviceCommonInterface {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  model: string;
  getMeasures(): Measure[] {
    return [];
  }
  getCurrentStates(): State[] {
    return [];
  }
  getAlarms(): Alarm[] {
    return [];
  }
  getSignals(): Signal[] {
    return [];
  }

  constructor({
    id,
    description,
    model,
    manufacturer,
    name
  }: DeviceCommonParams) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.model = model;
    this.manufacturer = manufacturer;
  }
}

// WARN:
// The device factory is not properly implemented yet!
// This is just a proof of concept.

// TODO:
// Need to complete the DeviceFactory class.

class DeviceFactory {
  createDevice(): DeviceCommonInterface {
    return new MockDevice({
      id: 0,
      name: "Device",
      description: "Mock device",
      model: "Mock Series 0000",
      manufacturer: "The MockDevice Co."
    });
  }
  constructor() {
  }
}

// WARN:
// This is a proof of concept.

const dev = new DeviceFactory().createDevice();
console.log(`Device created.`);
console.log(`Name: ${dev.name}`);
console.log(`Description: ${dev.description}`);
console.log(`Manufacturer: ${dev.manufacturer}`);
console.log(`Model: ${dev.model}`);


