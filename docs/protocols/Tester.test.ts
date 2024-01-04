import { describe, test, expect } from "bun:test";
import { serializeString } from "./serializeString";
import { serializeNumber } from "./serializeNumber";

describe("serializeNumber()", function () {
  test("(0) => ArrayBuffer[1]< 00 >", function () {
    let buffer = new ArrayBuffer(1);
    expect(serializeNumber(0)).toEqual(buffer);
  });
});

describe("serializeString()", function () {
  test("('') => ArrayBuffer[1]< 00 >", function () {
    expect(serializeString("")).toEqual(new ArrayBuffer(1));
  });
  test("('a', 'utf8') => ArrayBuffer[2]< 01 97 >", function () {
    let buffer = new ArrayBuffer(2);
    let view = new DataView(buffer);
    view.setUint8(0, 1);
    view.setUint8(1, 97);
    expect(serializeString("a")).toEqual(buffer);
  });
  test("('Hello World!', 'utf8') => ArrayBuffer[13]< 12 72 101 108 108 111 32 87 111 114 108 100 33 >", function () {
    let buffer = new ArrayBuffer(13);
    let view = new DataView(buffer);
    view.setUint8(0, 12);
    let text = "Hello World!";
    for (let i = 0; i < text.length; i++) {
      view.setUint8(i + 1, text.charCodeAt(i));
    }
    expect(serializeString(text)).toEqual(buffer);
  });
  test("('Hello World!', 'utf16') => ArrayBuffer[25]< 24 00 72 00 101 00 108 00 108 00 111 00 32 00 87 00 111 00 114 00 108 00 100 00 33 >", function () {
    let buffer = new ArrayBuffer(25);
    let view = new DataView(buffer);
    view.setUint8(0, 24);
    let text = "Hello World!";
    for (let i = 0; i < text.length; i++) {
      view.setUint16(i * 2 + 1, text.charCodeAt(i));
    }
    expect(serializeString(text, "utf16")).toEqual(buffer);
  });
  test("('Hello World!', 'utf16', 'LE') => ArrayBuffer[25]< 24, 72, 0, 101, 0, 108, 0, 108, 0, 111, 0, 32, 0, 87, 0, 111, 0, 114, 0, 108, 0, 100, 0, 33, 0 >", function () {
    let buffer = new ArrayBuffer(25);
    let view = new DataView(buffer);
    view.setUint8(0, 24);
    let text = "Hello World!";
    for (let i = 0; i < text.length; i++) {
      view.setUint16(i * 2 + 1, text.charCodeAt(i), true);
    }
    expect(serializeString(text, "utf16", "LE")).toEqual(buffer);
  });
});
