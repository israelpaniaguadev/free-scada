import {
  Bool,
  Char,
  Int,
  Int16,
  Int32,
  Int64,
  Int8,
  Uint,
  Uint16,
  Uint32,
  Uint64,
  Uint8,
} from "./Datatypes";

export type SimpleMessageField = {
  name: string;
  endianness: "Big" | "Little";
} & (
  | Char
  | Bool
  | Int
  | Uint
  | Int8
  | Int16
  | Int32
  | Int64
  | Uint8
  | Uint16
  | Uint32
  | Uint64
);

// Specific typed message fields:
export type IntMessageField = SimpleMessageField & Int;
export type Int8MessageField = SimpleMessageField & Int8;
export type Int16MessageField = SimpleMessageField & Int16;
export type Int32MessageField = SimpleMessageField & Int32;
export type Int64MessageField = SimpleMessageField & Int64;
export type UintMessageField = SimpleMessageField & Uint;
export type Uint8MessageField = SimpleMessageField & Uint8;
export type Uint16MessageField = SimpleMessageField & Uint16;
export type Uint32MessageField = SimpleMessageField & Uint32;
export type Uint64MessageField = SimpleMessageField & Uint64;
export type BoolMessageField = SimpleMessageField & Bool;
export type CharMessageField = SimpleMessageField & Char;
