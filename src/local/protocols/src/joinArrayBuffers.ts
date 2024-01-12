import type { JoinedArrayBuffers } from "../types/JoinedArrayBuffers";

export function joinArrayBuffers({
  buffers,
  reverseOrder,
}: JoinedArrayBuffers): ArrayBuffer {
  let size = 0;
  for(let i = 0; i < buffers.length; i++){
    size += buffers[i].buffer.byteLength;
  }
  let joinedBuffer = new ArrayBuffer(size);
  let view = new DataView(joinedBuffer);
  for(let i = 0; i < buffers.length; i++){
    let indexI = i;
    if(reverseOrder){
      indexI = buffers.length - 1 - i;
    }
    const {buffer, byteOrderAscendant} = buffers[indexI];
    for(let j = 0; j < buffer.byteLength; j++){
      let indexJ = j;
      if(!byteOrderAscendant){
        indexJ = buffer.byteLength - 1 - j;
      }
      const vw = new DataView(buffer);
      view.setUint8();
    }
  }
  return joinedBuffer;
}
