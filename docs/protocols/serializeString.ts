export function serializeString(
  string: string,
  encoding: "utf8" | "utf16" | "utf32" | "ascii" = "utf8",
  endianness: "BE" | "LE" = "BE"
): ArrayBuffer {
  // TODO: Serialization of number type.
  let size = 1;
  if (encoding == "utf16") {
    size += string.length * 2;
  } else if (encoding == "utf32") {
    size += string.length * 4;
  } else {
    size += string.length;
  }
  let ed: boolean;
  if (endianness == "BE") {
    ed = false;
  } else {
    ed = true;
  }
  let buffer = new ArrayBuffer(size);
  let view = new DataView(buffer);
  view.setUint8(0, size - 1);
  if (string.length == 0) {
    return buffer;
  }
  for (let i = 0; i < string.length; i++) {
    if (encoding == "utf16") {
      view.setUint16(i * 2 + 1, string.charCodeAt(i), ed);
      continue;
    }
    if (encoding == "utf32") {
      view.setUint32(i * 4 + 1, string.charCodeAt(i), ed);
      continue;
    }
    view.setUint8(i + 1, string.charCodeAt(i));
  }
  return buffer;
}
