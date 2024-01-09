export function joinArrayBuffers({
  buffers,
  isReversed,
}: {
  buffers: ArrayBuffer[];
  isReversed?: boolean;
}): ArrayBuffer {
  let size = 0;
  buffers.forEach(function ({ byteLength }) {
    size += byteLength;
  });
  let buffer = new ArrayBuffer(size);
  const view = new DataView(buffer);
  if (isReversed) {
    for (let i = buffers.length; i > 0; i--) {
      const bytes = new Uint8Array(buffers[i]);
      for (let j = bytes.length; j > 0; j--) {
        if (i == 0) {
          view.setUint8(j, bytes[j]);
          continue;
        }
        view.setUint8(j + buffers[i - 1].byteLength, bytes[j]);
      }
    }
    return buffer;
  }
  for (let i = 0; i < buffers.length; i++) {
    const bytes = new Uint8Array(buffers[i]);
    for (let j = 0; j < bytes.length; j++) {
      if (i == 0) {
        view.setUint8(j, bytes[j]);
        continue;
      }
      view.setUint8(j + buffers[i - 1].byteLength, bytes[j]);
    }
  }
  return buffer;
}
