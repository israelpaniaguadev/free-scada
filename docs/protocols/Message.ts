import { DynamicMessageBlock, SimpleMessageBlock } from "./Blocktypes";

// A message can be splitted down into three main parts:
// 1- Headers that describes the message in general.
// 2- Body
// 3- End (optional)
// The headers cannot be "dynamic".
// The body can be simple or dynamic.
// The end cannot be dynamic.
export type MessageStruct = {
  headers: SimpleMessageBlock;
  body: DynamicMessageBlock[] | SimpleMessageBlock;
  end?: SimpleMessageBlock;
};
