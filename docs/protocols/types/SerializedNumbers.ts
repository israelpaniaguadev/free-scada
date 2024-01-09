type SerializableUint = {
  isSigned: false;
  isInteger: true;
  isLittleEndian: boolean;
};
type SerializableUint8 = {
  value: number;
  byteLength: 1;
} & SerializableUint;
type SerializableUint16 = {
  value: number;
  byteLength: 2;
} & SerializableUint;
type SerializableUint32 = {
  value: number;
  byteLength: 4;
} & SerializableUint;
type SerializableUint64 = {
  value: bigint;
  byteLength: 8;
} & SerializableUint;

type SerializableInt = {
  isSigned: true;
  isInteger: true;
  isLittleEndian: boolean;
};
type SerializableInt8 = {
  value: number;
  byteLength: 1;
} & SerializableInt;
type SerializableInt16 = {
  value: number;
  byteLength: 2;
} & SerializableInt;
type SerializableInt32 = {
  value: number;
  byteLength: 4;
} & SerializableInt;
type SerializableInt64 = {
  value: bigint;
  byteLength: 8;
} & SerializableInt;

type SerializableFloat = {
  value: number;
  isInteger: false;
  isSigned: true;
  isLittleEndian: boolean;
};
type SerializableFloat32 = {
  byteLength: 4;
} & SerializableFloat;
type SerializableFloat64 = {
  byteLength: 8;
} & SerializableFloat;

export type SerializableNumber =
  | SerializableFloat32
  | SerializableFloat64
  | SerializableInt8
  | SerializableInt16
  | SerializableInt32
  | SerializableInt64
  | SerializableUint8
  | SerializableUint16
  | SerializableUint32
  | SerializableUint64;
