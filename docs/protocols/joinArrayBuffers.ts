export function joinArrayBuffers(buffers: ArrayBuffer[]): ArrayBuffer {
  let size = 0;
  buffers.forEach(function ({ byteLength }) {
    size += byteLength;
  });
  let buffer = new ArrayBuffer(size);
  let view = new DataView(buffer);
  for (let i = 0; i < buffers.length; i++) {
    const bytes = new Uint8Array(buffers[i]);
    for (let j = 0; j < bytes.length; j++) {
      if (i == 0) {
        view.setUint8(j, bytes[bytes.length - 1 - j]);
        continue;
      }
      view.setUint8(j + buffers[i - 1].byteLength, bytes[bytes.length - 1 - j]);
    }
  }
  return buffer;
}
