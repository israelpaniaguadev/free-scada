import { Char, LineEnd } from "./Datatypes";
import {
  SimpleMessageField,
  IntMessageField,
  UintMessageField,
  CharMessageField,
} from "./Fieldtypes";

// A set of fields can form a message block.
// There are two types of blocks:
// 1- Fixed length
// 2- Variable length
// Also, a message block can be inside another message block an so on.
// Moreover, the order of the fields matters.
export type SimpleMessageBlock = {
  name?: string;
  length?: number;
  data: SimpleMessageField[];
};

export type StringMessageBlock = {
  name?: string;
  length: (UintMessageField | IntMessageField) & { name: "length" };
  data: Char[];
  lineEnding: LineEnd;
};

export type DynamicMessageBlock = {
  name: string;
  length: (UintMessageField | IntMessageField) & { name: "length" };
  data: (SimpleMessageField | StringMessageBlock | DynamicMessageBlock)[];
};
