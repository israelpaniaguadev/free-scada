import { DynamicMessageBlock, SimpleMessageBlock } from "./Blocktypes";

const TCPIpPortHeaders: SimpleMessageBlock = {
  name: "TCP/IP Headers",
  data: [
    {
      name: "ip",
      endianness: "Little",
      size: 4,
      type: "uint32",
    },
    {
      name: "port",
      endianness: "Little",
      size: 4,
      type: "uint32",
    },
  ],
};

let user: DynamicMessageBlock = {
  name: "user",
  length: {
    name: "length",
    type: "uint32",
    size: 4,
    endianness: "Little",
  },
  data: [
    {
      name: "name",
      length: {
        name: "length",
        endianness: "Little",
        type: "uint8",
        size: 1,
      },
      lineEnding: "LF",
      data: [
        {
          type: "char",
          size: 1,
          encoding: "utf8",
        },
        {
          type: "char",
          size: 1,
          encoding: "utf8",
        },
        {
          type: "char",
          size: 1,
          encoding: "utf8",
        },
        {
          type: "char",
          size: 1,
          encoding: "utf8",
        },
      ],
    },
  ],
};
