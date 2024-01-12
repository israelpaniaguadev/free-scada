import { it, describe, expect } from "bun:test";
import { joinArrayBuffers } from "../src/joinArrayBuffers";

describe("joinArrayBuffers()", function () {
  it("Should return an ArrayBuffer(8)[ 1, 0, 0, 0, 1, 0, 0, 0 ]", function () {
    let buffer = new ArrayBuffer(8);
    let bufferA = new ArrayBuffer(4);
    let bufferB = new ArrayBuffer(4);

    let view = new DataView(buffer);
    view.setUint8(0, 1);
    view.setUint8(4, 1);
    view = new DataView(bufferA);
    view.setUint8(0, 1);
    view = new DataView(bufferB);
    view.setUint8(0, 1);
    expect(
      joinArrayBuffers({
        buffers: [bufferA, bufferB],
      })
    ).toEqual(buffer);
  });
  it("Should return an ArrayBuffer(8)[ 0, 0, 0, 0, 0, 255, 0, 0 ]", function () {
    let buffer = new ArrayBuffer(8);
    let bufferA = new ArrayBuffer(4);
    let bufferB = new ArrayBuffer(4);

    let view = new DataView(buffer);
    view.setUint8(5, 255);
    view = new DataView(bufferB);
    view.setUint8(1, 255);
    console.log(buffer);
    expect(
      joinArrayBuffers({
        buffers: [bufferA, bufferB],
      })
    ).toEqual(buffer);
  });
});
