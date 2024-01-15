# Protocols

## The problem: Serialization and deserialization

Even though NodeJS itself works at bit-level to manage TCP/IP sockets and serial ports,
it's hard to work at that level. The primitives in TypeScript are not mapped or tied to
the classic C-like data types (such as `int`, `void`, `char`, `float`, `bool`, etc), which are tied
to their raw representation, unlike the JS/TS data types.
For this reason, the process of sending and receiving raw data in this language is all a
challenge, and to make things worse, everything communicates via raw bits.
This is why the most important thing to do is to "parse" the TypeScript data to a raw
representation of the information, like the NodeJS `Buffer` type or the ES `ArrayBuffer`.

The concrete term to convert from a manipulable JS data to raw bits is called _serialization_,
and the inverse process, _deserialization_. To serialize something, we have to:

1. Find its memory size (in bytes)
2. Get its endianness
3. Obtain, if needed, the encoding
4. Put the bytes in order with its corresponding metadata.
5. Store the bytes properly into the `ArrayBuffer`

## Development process

The serialization/deserialization functions should be done carefully.
This is why a **Test-Driven Development** approach should be taken to
ensure the quality of the written code and to deal easily with the problem.

### Running tests

If you are interested on testing the functions, you can collaborate by writing
your own test. We use BunJS as test runner, but Jest and Vitest are also allowed.
Just write a test in your preferred framework (Bun, Jest, Vitest) into a `.test.ts` file,
and run it with one of the following commands:
Using Bun:

```shell
bun test # Simple mode
bun test --watch # Watch mode (recommended)
```

Using Jest or Vitest via `package.json` script:

```shell
npm test # If your package.json has a 'test' script configured properly
```

Using Jest:

```shell
npm jest # If just using "Vanilla" JS
npm ts-jest # If using TypeScrip (recommended)
```

Using Vitest:

```shell
npm vitest
```

Of course, you need to install your testing dependencies first:

```shell
npm i -D jest typescript @types/jest ts-jest # If you prefer Jest
npm i -D vitest typescript @types/vitest # If you prefer Vitest
```

You will need to configure Vitest (`vite.config.ts`) to use with TypeScript:

```typescript
// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    // ... Specify options here.
  },
});
```

## Supported protocols (coming soon)

Here's a list of the protocols planned to be supported:

- IEC-60870-5 101 (Serial) Master/Slave
- IEC-60870-5 104 (TCP/IP) Master/Slave
- IEC-61850 (TCP/IP) Client/Server
- MODBUS (Serial) Slave
- MODBUS (TCP/IP) Slave
- DNP3 (Serial - TCP/IP) Master/Slave
