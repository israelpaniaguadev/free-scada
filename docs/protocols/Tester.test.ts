import { describe, test, expect } from "bun:test";
//import { serializeString } from "./serializeString";
//import { serializeNumber } from "./serializeNumber";
import { joinArrayBuffers } from "./joinArrayBuffers";

describe("joinArrayBuffers()", function () {
  test("([a(3), b(5)]) => ArrayBuffer(8)[ 0, 0, 0, 0, 0, 0, 0, 0 ]", function () {
    let a = new Float32Array([3.973918745]).buffer as ArrayBuffer;
    let b = new Float32Array([5.18346]).buffer as ArrayBuffer;
    let result = new ArrayBuffer(a.byteLength + b.byteLength);
    let view = new DataView(result);
    view.setFloat32(0, 3.973918745);
    view.setFloat32(4, 5.18346);

    expect(joinArrayBuffers([a, b])).toEqual(result);
  });
});
