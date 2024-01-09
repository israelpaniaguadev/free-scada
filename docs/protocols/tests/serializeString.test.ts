import { it, describe, expect } from "bun:test";
import { serializeString } from "../src/serializeString";

describe("serializeString()", function () {
  it("Should return an ArrayBuffer(1)[ 10 ], given { '' }", function () {
    let buffer = new ArrayBuffer(1);
    const view = new DataView(buffer);
    view.setUint8(0, 10);
    expect(
      serializeString({
        bytesPerChar: 1,
        isCRLF: false,
        isLittleEndian: false,
        isReversed: false,
        value: "",
      })
    ).toEqual(buffer);
  });
  it("Should return an ArrayBuffer(1)[ 10 ], given { '' }", function () {
    let buffer = new ArrayBuffer(1);
    const view = new DataView(buffer);
    view.setUint8(0, 10);
    expect(
      serializeString({
        bytesPerChar: 1,
        isCRLF: false,
        isLittleEndian: false,
        isReversed: false,
        value: "",
      })
    ).toEqual(buffer);
  });
  it("Should return an ArrayBuffer(1)[ 101, 10 ], given { 'e' }", function () {
    let buffer = new ArrayBuffer(2);
    const view = new DataView(buffer);
    view.setUint8(0, 101);
    view.setUint8(1, 10);
    expect(
      serializeString({
        bytesPerChar: 1,
        isCRLF: false,
        isLittleEndian: false,
        isReversed: false,
        value: "e",
      })
    ).toEqual(buffer);
  });
  it("Should return an ArrayBuffer(1)[ 117, 101, 10 ], given { 'ue' }", function () {
    let buffer = new ArrayBuffer(3);
    const view = new DataView(buffer);
    view.setUint8(0, 117);
    view.setUint8(1, 101);
    view.setUint8(2, 10);
    expect(
      serializeString({
        bytesPerChar: 1,
        isCRLF: false,
        isLittleEndian: false,
        isReversed: false,
        value: "ue",
      })
    ).toEqual(buffer);
  });
});
