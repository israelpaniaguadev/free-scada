export function deserializeNumber(
  buffer: ArrayBuffer,
  signed: boolean = false,
  endianness: boolean = true
): number {
  let view = new DataView(buffer);
  if (!signed) {
    if (buffer.byteLength == 1) {
      return view.getUint8(0);
    }
    if (buffer.byteLength == 2) {
      return view.getUint16(0, endianness);
    }
    if (buffer.byteLength == 4) {
      return view.getUint32(0, endianness);
    }
  }
  if (buffer.byteLength == 1) {
    return view.getInt8(0);
  }
  if (buffer.byteLength == 2) {
    return view.getInt16(0, endianness);
  }
  if (buffer.byteLength == 4) {
    return view.getInt32(0, endianness);
  }
  return 0;
}
