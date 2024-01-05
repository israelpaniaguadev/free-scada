import { describe, test, expect } from "bun:test";
import { serializeString } from "./serializeString";
import { serializeNumber } from "./serializeNumber";
import { joinArrayBuffers } from "./joinArrayBuffers";

describe("joinArrayBuffers()", function () {
  test("([a(3), b(5)]) => ArrayBuffer(8)[ 64, 126, 84, 175, 64, 165, 222, 232 ]", function () {
    let a = new Float32Array([3.973918745]).buffer as ArrayBuffer;
    let b = new Float32Array([5.18346]).buffer as ArrayBuffer;
    let result = new ArrayBuffer(a.byteLength + b.byteLength);
    let view = new DataView(result);
    view.setFloat32(0, 3.973918745);
    view.setFloat32(4, 5.18346);
    expect(joinArrayBuffers([a, b])).toEqual(result);
  });
});

describe("serializeString()", function () {
  test("('Hello World!') => ArrayBuffer(16)[ 0 0 0 12 72 101 108 108 111 32 87 111 114 108 100 33 ]", function () {
    let str = Buffer.from("   Hello World!", "utf8");
    let result = str.buffer as ArrayBuffer;

    expect(serializeString("Hello World!")).toEqual(result);
  });
});
