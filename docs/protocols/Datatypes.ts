// We're going to build up the message blocks and segments from the scratch:
// The most elemental component of a message is a field, composed by:
// 1- Name of the field.
// 2- Datatype (must be bounded to the 'Size in RAM')
// 3- Size in RAM measured in bytes(must be bounded to the 'Datatype')
// 4- An endianness (Big or Little)
// 5- An encoding (only applies for text datatypes)
// Signed integers:
export type Int8 = {
  size: 1;
  type: "int8";
};

export type Int16 = {
  size: 2;
  type: "int16";
};

export type Int32 = {
  size: 4;
  type: "int32";
};

export type Int64 = {
  size: 8;
  type: "int64";
};

// A shorthand for a "general" signed integer type:
export type Int = Int8 | Int16 | Int32 | Int64;

// Unsigned integers:
export type Uint8 = {
  size: 1;
  type: "uint8";
};

export type Uint16 = {
  size: 2;
  type: "uint16";
};

export type Uint32 = {
  size: 4;
  type: "uint32";
};

export type Uint64 = {
  size: 8;
  type: "uint64";
};

// A shorthand for a "general" unsigned integer type:
export type Uint = Uint8 | Uint16 | Uint32 | Uint64;

// Boolean:
// Even if a boolean type is represented by a single bit,
// TypeScript is unable to go that far (There's no typed arrays to handle bits).
// Instead, a whole byte is taken to determine the value of the boolean.
export type Bool = {
  size: 1;
  type: "bool";
};

// Text strings:
// A string, at first, has its size undefined.
// We have to combine various characters to get a text, in addition to
// a field with the total length of the string and the end character
// (in C/C++ is a null character 0x00) and the line ending (LF or CRLF).
// A char also has to be "encoded".
export type LineEnd = "CRLF" | "LF" | "none";

export type Encoding =
  | {
      size: 1;
      encoding: "hex" | "utf8" | "ascii";
    }
  | {
      size: 2;
      encoding: "utf16";
    }
  | {
      size: 4;
      encoding: "utf32";
    };

export type Char = {
  type: "char";
} & Encoding;
