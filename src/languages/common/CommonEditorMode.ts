import { PanTypePart } from "../CommonASTNode";
import { CommonLocalizedStrings } from "./CommonLocalizedStrings";

export const enum ModeState {
  Base,
  Text,
  TextInterpolation,
  Comment,
}

export interface IEditorModeState {
  modeState: ModeState;
  quote?: string;
}

export interface IStateStack {
  states: IEditorModeState[];
}

export interface IModeOptions {
  reservedWordsToStyles: string[][];
  bracketRegExp: RegExp;
  operatorRegExp: RegExp;
  decimalNumberRegExp: RegExp;
  hexNumberRegExp: RegExp;
  binaryNumberRegExp: RegExp;
  identifierRegExp: RegExp;
}

export const makeReservedWordsToStyles = (localizedStrings: CommonLocalizedStrings): string[][] => {
  const reservedWordsToStyles = [
    [localizedStrings.KEYWORD_TRUE, "atom"],
    [localizedStrings.KEYWORD_FALSE, "atom"],
    [localizedStrings.KEYWORD_BREAK, "keyword"],
    [localizedStrings.KEYWORD_CONSTANT, "keyword"],
    [localizedStrings.KEYWORD_CONTINUE, "keyword"],
    [localizedStrings.KEYWORD_ELSE, "keyword"],
    [localizedStrings.KEYWORD_END, "keyword"],
    [localizedStrings.KEYWORD_FOR, "keyword"],
    [localizedStrings.KEYWORD_FOREVER, "keyword"],
    [localizedStrings.KEYWORD_FROM, "keyword"],
    [localizedStrings.KEYWORD_FUNCTION, "keyword"],
    [localizedStrings.KEYWORD_GLOBAL, "keyword"],
    [localizedStrings.KEYWORD_IF, "keyword"],
    [localizedStrings.KEYWORD_IN, "keyword"],
    [localizedStrings.KEYWORD_RETURN, "keyword"],
    [localizedStrings.KEYWORD_RETURNS, "keyword"],
    [localizedStrings.KEYWORD_TO, "keyword"],
    [localizedStrings.KEYWORD_WHILE, "keyword"],
    [localizedStrings.KEYWORD_NOT, "operator"],
    [localizedStrings.KEYWORD_AND, "operator"],
    [localizedStrings.KEYWORD_OR, "operator"],
    [localizedStrings.KEYWORD_TYPES[PanTypePart.Logical.toString()], "type"],
    [localizedStrings.KEYWORD_TYPES[PanTypePart.Number.toString()], "type"],
    [localizedStrings.KEYWORD_TYPES[PanTypePart.Text.toString()], "type"],
  ];

  // store word list using reverse sort to find longest match first
  return reservedWordsToStyles
    .slice()
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reverse();
};

export const escapeRegExpChars = (string: string): string => {
  // replace \ with \\, etc.
  return string.replace(/[\\^$.|?*+(){}[\]/=:-]/g, "\\$&");
};

export const makeModeFactory = (modeOptions: IModeOptions): CodeMirror.Mode<IStateStack> => {
  const reservedWordsToStyles = modeOptions.reservedWordsToStyles;
  const bracketRegExp = modeOptions.bracketRegExp;
  const operatorRegExp = modeOptions.operatorRegExp;
  const decimalNumberRegExp = modeOptions.decimalNumberRegExp;
  const hexNumberRegExp = modeOptions.hexNumberRegExp;
  const binaryNumberRegExp = modeOptions.binaryNumberRegExp;
  const identifierRegExp = modeOptions.identifierRegExp;

  const makeBaseStateStack = (): IStateStack => {
    return {
      states: [
        {
          modeState: ModeState.Base,
        },
      ],
    };
  };

  const getCurrentState = (stateStack: IStateStack): IEditorModeState => {
    return stateStack.states[stateStack.states.length - 1];
  };

  const Base = (stream: CodeMirror.StringStream, stateStack: IStateStack): string | null => {
    // inline comment
    if (stream.match("//")) {
      stream.skipToEnd();
      return "comment";
    }

    // inline comment
    if (stream.match("#")) {
      stream.skipToEnd();
      return "comment";
    }

    // multi-line comment
    if (stream.match("/*")) {
      const newState: IEditorModeState = {
        modeState: ModeState.Comment,
      };
      stateStack.states.push(newState);
      return "comment";
    }

    // hex number
    if (stream.match(hexNumberRegExp)) {
      return "number";
    }

    // binary number
    if (stream.match(binaryNumberRegExp)) {
      return "number";
    }

    // decimal number
    if (stream.match(decimalNumberRegExp)) {
      return "number";
    }

    // text (")
    if (stream.match('"')) {
      const newState: IEditorModeState = {
        modeState: ModeState.Text,
        quote: '"',
      };
      stateStack.states.push(newState);
      return "string";
    }

    // text (')
    if (stream.match("'")) {
      const newState: IEditorModeState = {
        modeState: ModeState.Text,
        quote: "'",
      };
      stateStack.states.push(newState);
      return "string";
    }

    // brackets
    if (stream.match(bracketRegExp)) {
      return "bracket";
    }

    // operators
    if (stream.match(operatorRegExp)) {
      return "operator";
    }

    // reserved words
    for (const [word, style] of reservedWordsToStyles) {
      if (stream.match(escapeRegExpChars(word))) {
        // not actually a reserved word, just an identifier with the same prefix
        if (stream.match(identifierRegExp)) {
          return "variable";
        }

        return style;
      }
    }

    // identifiers
    if (stream.match(identifierRegExp)) {
      return "variable";
    }

    // advance stream without styling
    stream.next();
    return null;
  };

  const Text = (stream: CodeMirror.StringStream, stateStack: IStateStack): string | null => {
    // if this is a new line, reset the state
    if (stream.sol()) {
      Object.assign(stateStack, makeBaseStateStack());
      return null;
    }

    // end string
    const endQuote = getCurrentState(stateStack).quote;
    if (endQuote && stream.match(endQuote)) {
      stateStack.states.pop();
      return "string";
    }

    // text interpolation (only with double quotes)
    if (endQuote == '"' && stream.match("{")) {
      const newState: IEditorModeState = {
        modeState: ModeState.TextInterpolation,
      };
      stateStack.states.push(newState);
      return "bracket";
    }

    // escaped ", ' and {
    if (stream.match(/\\["'{]/)) {
      return "string";
    }

    // keep matching
    stream.next();
    return "string";
  };

  const TextInterpolation = (
    stream: CodeMirror.StringStream,
    stateStack: IStateStack,
  ): string | null => {
    // if this is a new line, reset the state
    if (stream.sol()) {
      Object.assign(stateStack, makeBaseStateStack());
      return null;
    }

    // end text interpolation
    if (stream.match("}")) {
      stateStack.states.pop();
      return "bracket";
    }

    // match using base rules
    return Base(stream, stateStack);
  };

  const Comment = (stream: CodeMirror.StringStream, stateStack: IStateStack): string | null => {
    // end comment
    if (stream.match("*/")) {
      stateStack.states.pop();
      return "comment";
    }

    // keep matching
    stream.next();
    return "comment";
  };

  return {
    startState: (): IStateStack => {
      return makeBaseStateStack();
    },

    token: (stream: CodeMirror.StringStream, stateStack: IStateStack): string | null => {
      // defer parsing to each state's own function
      const currentState = getCurrentState(stateStack);
      switch (currentState.modeState) {
        case ModeState.Base:
          return Base(stream, stateStack);
        case ModeState.Text:
          return Text(stream, stateStack);
        case ModeState.TextInterpolation:
          return TextInterpolation(stream, stateStack);
        case ModeState.Comment:
          return Comment(stream, stateStack);
        default:
          stream.next();
          return "error";
      }
    },
  };
};
