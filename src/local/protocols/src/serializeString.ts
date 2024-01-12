import type { SerializedString } from "../types/SerializedStrings";

export function serializeString({
  bytesPerChar,
  isCRLF,
  isReversed,
  isLittleEndian,
  value,
}: SerializedString): ArrayBuffer {
  let buffer: ArrayBuffer;
  if (isCRLF) {
    buffer = new ArrayBuffer((value.length + 2) * bytesPerChar);
  }
  buffer = new ArrayBuffer((value.length + 1) * bytesPerChar);
  const view = new DataView(buffer);
  let stringArray: string[] = value.split("");
  if (isReversed) {
    for (let index = 0; index < value.length; index++) {
      if (bytesPerChar == 4) {
        view.setUint32(
          buffer.byteLength - 1 - index * bytesPerChar,
          value.charCodeAt(value.length - 1 - index),
          isLittleEndian
        );
        continue;
      }
      if (bytesPerChar == 2) {
        view.setUint16(
          buffer.byteLength - 1 - index * bytesPerChar,
          value.charCodeAt(value.length - 1 - index),
          isLittleEndian
        );
        continue;
      }
      view.setUint8(
        buffer.byteLength - 1 - index,
        value.charCodeAt(value.length - 1 - index)
      );
      continue;
    }
    if (isCRLF) {
      view.setUint8(buffer.byteLength - 1 - value.length, 13);
      view.setUint8(buffer.byteLength - 1 - value.length + 1, 10);
    }
    view.setUint8(value.length, 10);
    return buffer;
  }

  for (let index = 0; index < value.length; index++) {
    if (bytesPerChar == 4) {
      view.setUint32(
        index * bytesPerChar,
        value.charCodeAt(index),
        isLittleEndian
      );
      continue;
    }
    if (bytesPerChar == 2) {
      view.setUint16(
        index * bytesPerChar,
        value.charCodeAt(index),
        isLittleEndian
      );
      continue;
    }
    view.setUint8(index, value.charCodeAt(index));
    continue;
  }
  if (isCRLF) {
    view.setUint8(value.length, 13);
    view.setUint8(value.length + 1, 10);
  }
  view.setUint8(value.length, 10);
  return buffer;
}
