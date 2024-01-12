type SerializedText = {
  value: string;
  isLittleEndian: boolean;
  isReversed: boolean;
  isCRLF: boolean;
};
type SerializedUTF8 = {
  bytesPerChar: 1;
} & SerializedText;
type SerializedUTF16 = {
  bytesPerChar: 2;
} & SerializedText;
type SerializedUTF32 = {
  bytesPerChar: 4;
} & SerializedText;
type SerializedASCII = {
  bytesPerChar: 1;
} & SerializedText;

export type SerializedString =
  | SerializedASCII
  | SerializedUTF8
  | SerializedUTF16
  | SerializedUTF32;
