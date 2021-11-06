import * as Common from "../common/CommonEditorMode";
import { CustomLocalizedStrings } from "./CustomLocalizedStrings";

const localizedStrings = new CustomLocalizedStrings();

const modeOptions: Common.IModeOptions = {
  reservedWordsToStyles: Common.makeReservedWordsToStyles(localizedStrings),
  bracketRegExp: new RegExp("[" + Common.escapeRegExpChars("{}[]()") + "]"),
  operatorRegExp: new RegExp("[" + Common.escapeRegExpChars("=><!&|+-*/^%.") + "]"),
  decimalNumberRegExp: new RegExp("(?:(?:\\d+\\.?)|(?:\\d*\\.\\d+))(?:e[+-]?\\d+)?", "i"),
  hexNumberRegExp: new RegExp("0x[0-9a-f]+", "i"),
  binaryNumberRegExp: new RegExp("0b[01]+", "i"),
  identifierRegExp: new RegExp("[a-z\u{C0}-\u{FF}_][a-z\u{C0}-\u{FF}0-9_]*", "iu"),
};

export const ModeFactory = (): CodeMirror.Mode<Common.IStateStack> => {
  return Common.makeModeFactory(modeOptions);
};
