export function deserializeNumber(
  buffer: ArrayBuffer,
  signed: boolean = false,
  littleEndian: boolean = false
): number {
  let view = new DataView(buffer);
  if (!signed) {
    if (buffer.byteLength == 1) {
      return view.getUint8(0);
    }
    if (buffer.byteLength == 2) {
      return view.getUint16(0, littleEndian);
    }
    if (buffer.byteLength == 4) {
      return view.getUint32(0, littleEndian);
    }
  }
  if (buffer.byteLength == 1) {
    return view.getInt8(0);
  }
  if (buffer.byteLength == 2) {
    return view.getInt16(0, littleEndian);
  }
  if (buffer.byteLength == 4) {
    return view.getInt32(0, littleEndian);
  }
  return 0;
}
