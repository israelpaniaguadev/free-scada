import { describe, test, expect } from "bun:test";
import { deserializeNumber } from "./deserializeNumber";
import { serializeNumber } from "./serializeNumber";

describe("deserializeNumber()", function () {
  test("(ArrayBuffer(1)[0]) => 0", function () {
    let input = new ArrayBuffer(1);
    expect(deserializeNumber(input)).toEqual(0);
  });
  test("(ArrayBuffer(1)[4]) => 4", function () {
    let input = new Uint8Array([4]).buffer as ArrayBuffer;
    expect(deserializeNumber(input)).toEqual(4);
  });
  test(`(ArrayBuffer(2)[4, 0]) => 1024`, function () {
    let input = new Uint16Array([1024]).buffer as ArrayBuffer;
    expect(deserializeNumber(input, false, true)).toEqual(1024);
  });
  test(`(ArrayBuffer(4)[0, 0, 4, 0]) => 1024`, function () {
    let input = new Uint32Array([1024]).buffer as ArrayBuffer;
    expect(deserializeNumber(input, false, true)).toEqual(1024);
  });
  test(`(ArrayBuffer(4)[1, 0, 4, 0], true) => 1024`, function () {
    let input = new Int32Array([-1024]).buffer as ArrayBuffer;
    expect(deserializeNumber(input, true, true)).toEqual(-1024);
  });
  test(`Should be the inverse of 'serializeNumber()'`, function () {
    let input = serializeNumber(-1024, 4);
    let output = deserializeNumber(
      new Uint32Array([-1024]).buffer as ArrayBuffer
    );
    expect(deserializeNumber(input, true)).toEqual(-1024);
    expect(serializeNumber(output, 4)).toEqual(
      new Uint32Array([-1024]).buffer as ArrayBuffer
    );
  });
});
