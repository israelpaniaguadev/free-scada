import type { SerializableNumber } from "../types/SerializedNumbers";

export function serializeNumber({
  byteLength,
  isInteger,
  isLittleEndian,
  isSigned,
  value,
}: SerializableNumber): ArrayBuffer {
  let buffer = new ArrayBuffer(byteLength);
  let view = new DataView(buffer);
  if (isInteger) {
    if (isSigned) {
      if (byteLength == 1) {
        view.setInt8(0, value);
        return buffer;
      }
      if (byteLength == 2) {
        view.setInt16(0, value, isLittleEndian);
        return buffer;
      }
      if (byteLength == 4) {
        view.setInt32(0, value, isLittleEndian);
        return buffer;
      }
      view.setBigInt64(0, value, isLittleEndian);
      return buffer;
    }
    if (byteLength == 1) {
      view.setUint8(0, value);
      return buffer;
    }
    if (byteLength == 2) {
      view.setUint16(0, value, isLittleEndian);
      return buffer;
    }
    if (byteLength == 4) {
      view.setUint32(0, value, isLittleEndian);
      return buffer;
    }
    view.setBigUint64(0, value, isLittleEndian);
    return buffer;
  }
  if (byteLength == 4) {
    view.setFloat32(0, value, isLittleEndian);
    return buffer;
  }
  view.setFloat64(0, value, isLittleEndian);
  return buffer;
}
