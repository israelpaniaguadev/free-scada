import { joinArrayBuffers } from "./joinArrayBuffers";
import { serializeNumber } from "./serializeNumber";

export function serializeString(
  string: string,
  encoding: "utf8" | "utf16" | "utf32" | "ascii" = "utf8",
  endianness: boolean = false
): ArrayBuffer {
  // TODO: Serialization of number type.
  let charSize = 1;
  let size = 1;
  if (encoding == "utf16") {
    charSize = 2;
  }
  if (encoding == "utf32") {
    charSize = 4;
  }
  size = string.length * charSize;
  let buffer = new ArrayBuffer(size);
  let view = new DataView(buffer);
  let sizeField = serializeNumber(size, 4, true);
  if (string.length == 0) {
    return buffer;
  }
  for (let i = 0; i < string.length; i++) {
    if (encoding == "utf16") {
      view.setUint16(
        buffer.byteLength - 1 - i * charSize,
        string.charCodeAt(string.length - 1 - i),
        endianness
      );
      continue;
    }
    if (encoding == "utf32") {
      view.setUint32(
        buffer.byteLength - 1 - i * charSize,
        string.charCodeAt(string.length - 1 - i),
        endianness
      );
      continue;
    }
    view.setUint8(buffer.byteLength - 1 - i, string.charCodeAt(i));
  }

  return joinArrayBuffers([sizeField, buffer]);
}
