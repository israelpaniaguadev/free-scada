import { it, describe, expect } from "bun:test";
import { serializeNumber } from "../src/serializeNumber";

describe("serializeNumber()", function () {
  it("Should return ArrayBuffer(1)[ 0 ], given { 0 }", function () {
    let buffer = new ArrayBuffer(1);
    expect(
      serializeNumber({
        value: 0,
        isInteger: true,
        isLittleEndian: false,
        isSigned: false,
        byteLength: 1,
      })
    ).toEqual(buffer);
  });
  it("Should return ArrayBuffer(2)[ 0, 0 ], given { 0, 2 }", function () {
    let buffer = new ArrayBuffer(2);
    expect(
      serializeNumber({
        value: 0,
        isInteger: true,
        isLittleEndian: false,
        isSigned: false,
        byteLength: 2,
      })
    ).toEqual(buffer);
  });
  it("Should return ArrayBuffer(4)[ 0, 0, 0, 0 ], given { 0, 4 }", function () {
    let buffer = new ArrayBuffer(4);
    expect(
      serializeNumber({
        value: 0,
        isInteger: true,
        isLittleEndian: false,
        isSigned: false,
        byteLength: 4,
      })
    ).toEqual(buffer);
  });
  it("Should return ArrayBuffer(1)[ 0 ], given { 256 }", function () {
    let buffer = new ArrayBuffer(1);
    const view = new DataView(buffer);
    view.setUint8(0, 256);
    expect(
      serializeNumber({
        value: 256,
        isInteger: true,
        isLittleEndian: false,
        isSigned: false,
        byteLength: 1,
      })
    ).toEqual(buffer);
  });
  it("Should return ArrayBuffer(1)[ 1 ], given { 256, 1, true }", function () {
    let buffer = new ArrayBuffer(1);
    const view = new DataView(buffer);
    view.setUint8(0, 256);
    expect(
      serializeNumber({
        value: 256,
        isInteger: true,
        isLittleEndian: true,
        isSigned: false,
        byteLength: 1,
      })
    ).toEqual(buffer);
  });
  it("Should return ArrayBuffer(4)[ 126, 0, 0, 0 ], given { 0.5 }", function () {
    let buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setFloat32(0, 0.5);
    expect(
      serializeNumber({
        value: 0.5,
        isInteger: false,
        isLittleEndian: false,
        isSigned: true,
        byteLength: 4,
      })
    ).toEqual(buffer);
  });
  it("Should return ArrayBuffer(8)[ 63, 248, 0, 0, 0, 0, 0, 0 ], given { 0.5, 8 }", function () {
    let buffer = new ArrayBuffer(8);
    const view = new DataView(buffer);
    view.setFloat64(0, 0.5);
    expect(
      serializeNumber({
        value: 0.5,
        isInteger: false,
        isLittleEndian: false,
        isSigned: true,
        byteLength: 8,
      })
    ).toEqual(buffer);
  });
});
