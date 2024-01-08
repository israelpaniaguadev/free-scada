export function serializeNumber(
  number: number,
  size: 1 | 2 | 4 | 8 = 1,
  littleEndian: boolean = false
): ArrayBuffer {
  let buffer = new ArrayBuffer(size);
  let view = new DataView(buffer);
  if (!Number.isInteger(number)) {
    if (size == 8) {
      view.setFloat64(0, number, littleEndian);
      return buffer;
    }
    view.setFloat32(0, number, littleEndian);
    return buffer;
  }
  if (size > 1) {
    if (size == 4 || size == 8) {
      view.setUint32(0, number, littleEndian);
      return buffer;
    }
    view.setUint16(0, number, littleEndian);
    return buffer;
  }
  view.setUint8(0, number);
  return buffer;
}
