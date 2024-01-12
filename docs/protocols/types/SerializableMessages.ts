export type SimpleMessage = {
  [ id: number ]: {
    value: boolean | string | number;
    name: string;
  }
 };

export type ComplexMessage = {
  [ message: string ]: SimpleMessage | ComplexMessage;
};

export class SerializableMessage {

  message: SimpleMessage | ComplexMessage;

  constructor(message: SimpleMessage | ComplexMessage) {
    this.message = message;
  }
}

