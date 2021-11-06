export class CommonLocalizedStrings {
  PANSCRIPT_HEADLINE = "PanScript – code in your language";
  LANGUAGE_SELECT_PROMPT = "Language:";
  THEME_SELECT_PROMPT = "Theme:";
  RUN_BUTTON_LABEL = "Run";
  UNDO_BUTTON_LABEL = "Undo";
  REDO_BUTTON_LABEL = "Redo";
  RELOAD_BUTTON_LABEL = "Reload";
  SAVE_BUTTON_LABEL = "Save";
  LOAD_BUTTON_LABEL = "Load";
  CLEAR_BUTTON_LABEL = "Clear";
  EXPLORER_FOLDER_YOUR_FILES = "Your Files";
  EXPLORER_FOLDER_EXAMPLES = "Examples";
  EXPLORER_FOLDER_BASICS = "1 - Basics";
  EXPLORER_FOLDER_STANDARD_FUNCTIONS = "2 - Standard Functions";
  EXPLORER_FOLDER_EXPRESSIONS = "3 - Expressions";
  EXPLORER_FOLDER_CONDITIONALS = "4 - Conditionals";
  EXPLORER_FOLDER_LOOPS = "5 - Loops";
  EXPLORER_FOLDER_USER_FUNCTIONS = "6 - User Functions";
  EXPLORER_FILE_MAIN = "Main";
  EXPLORER_FILE_VARIABLES = "Variables";
  EXPLORER_FILE_TYPES = "Types";
  EXPLORER_FILE_CONSTANTS = "Constants";
  EXPLORER_FILE_TEXT_INTERPOLATION = "Text Interpolation";
  EXPLORER_FILE_CONSOLE_FUNCTIONS = "Console Functions";
  EXPLORER_FILE_TEXT_FUNCTIONS = "Text Functions";
  EXPLORER_FILE_MATH_FUNCTIONS = "Math Functions";
  EXPLORER_FILE_EXPRESSIONS = "Expressions";
  EXPLORER_FILE_IF = "If";
  EXPLORER_FILE_ELSE = "Else";
  EXPLORER_FILE_ELSE_IF = "Else If";
  EXPLORER_FILE_LOOPS = "Loops";
  EXPLORER_FILE_BREAK_AND_CONTINUE = "Break and Continue";
  EXPLORER_FILE_FUNCTIONS = "Functions";
  EXPLORER_FILE_RECURSION = "Recursion";
  KEYWORD_TRUE = "true";
  KEYWORD_FALSE = "false";
  KEYWORD_BREAK = "break";
  KEYWORD_CONSTANT = "constant";
  KEYWORD_CONTINUE = "continue";
  KEYWORD_ELSE = "else";
  KEYWORD_END = "end";
  KEYWORD_FOR = "for";
  KEYWORD_FOREVER = "forever";
  KEYWORD_FROM = "from";
  KEYWORD_FUNCTION = "function";
  KEYWORD_GLOBAL = "global";
  KEYWORD_IF = "if";
  KEYWORD_IN = "in";
  KEYWORD_RETURN = "return";
  KEYWORD_RETURNS = "returns";
  KEYWORD_TO = "to";
  KEYWORD_WHILE = "while";
  KEYWORD_NOT = "not";
  KEYWORD_AND = "and";
  KEYWORD_OR = "or";
  KEYWORD_TYPES: { [type: string]: string } = {
    logical: "logical",
    number: "number",
    text: "text",
    none: "none",
    any: "any",
    "...T": "...T",
  };
  FUNCTION_WRITE = "write";
  FUNCTION_WRITE_INLINE = "write_inline";
  FUNCTION_NEW_LINE = "new_line";
  FUNCTION_CLEAR = "clear";
  FUNCTION_TO_TEXT = "to_text";
  FUNCTION_PAD_LEFT = "pad_left";
  FUNCTION_PAD_RIGHT = "pad_right";
  FUNCTION_LENGTH = "length";
  FUNCTION_REPEAT = "repeat";
  FUNCTION_UPPER_CASE = "upper_case";
  FUNCTION_LOWER_CASE = "lower_case";
  FUNCTION_SENTENCE_CASE = "sentence_case";
  FUNCTION_LEFT = "left";
  FUNCTION_RIGHT = "right";
  FUNCTION_MIDDLE = "middle";
  FUNCTION_SLICE_TEXT = "slice_text";
  FUNCTION_REVERSE_TEXT = "reverse_text";
  FUNCTION_IN_TEXT = "in_text";
  FUNCTION_POSITION = "position";
  FUNCTION_TRIM = "trim";
  FUNCTION_TRIM_LEFT = "trim_left";
  FUNCTION_TRIM_RIGHT = "trim_right";
  FUNCTION_PI = "pi";
  FUNCTION_ABSOLUTE = "absolute";
  FUNCTION_POWER = "power";
  FUNCTION_SQUARE_ROOT = "square_root";
  FUNCTION_SINE = "sine";
  FUNCTION_COSINE = "cosine";
  FUNCTION_TANGENT = "tangent";
  FUNCTION_ARC_SINE = "arc_sine";
  FUNCTION_ARC_COSINE = "arc_cosine";
  FUNCTION_ARC_TANGENT = "arc_tangent";
  FUNCTION_EXPONENTIAL = "exponential";
  FUNCTION_NATURAL_LOGARITHM = "natural_logarithm";
  FUNCTION_LOGARITHM = "logarithm";
  FUNCTION_FLOOR = "floor";
  FUNCTION_CEILING = "ceiling";
  FUNCTION_TRUNCATE = "truncate";
  FUNCTION_MINIMUM = "minimum";
  FUNCTION_MAXIMUM = "maximum";
  FUNCTION_RANDOM_REAL = "random_real";
  FUNCTION_RANDOM_INTEGER = "random_integer";
  FUNCTION_ROUND = "round";
  FUNCTION_ROUND_N_PLACES = "round_n_places";
  FUNCTION_TRUNCATE_N_PLACES = "truncate_n_places";
  ERROR = "Error";
  ERROR_MESSAGE_END_OF_CODE_TOKEN = "the end of the code";
  ERROR_MESSAGE_END_OF_LINE_TOKEN = "the end of the line";
  ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN =
    "Error: I could not understand the code at line ${line}, column ${charPositionInLine}";
  ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX =
    "Error at line ${line}:\r\nI was not expecting to find ${symbolDescription}";
  ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED =
    "Error at line ${line}:\r\nThe identifier ${name} is being defined a second time";
  ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH =
    "Error at line ${line}:\r\nI was expecting the type of ${name} to be ${expectedType}, but it was ${actualType}";
  ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT =
    'Error at line ${line}:\r\nI cannot modify the value of ${name} because it was declared as "${constantKeyword}"';
  ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER =
    "Error at line ${line}:\r\nI could not find the identifier ${name} in the current scope";
  ERROR_MESSAGE_TEMPLATE_ARGUMENTS_NUMBER =
    "Error at line ${line}:\r\nFunction ${name} expects ${argumentsExpected} argument(s), but I have found ${argumentsGiven} instead";
  ERROR_MESSAGE_GLOBAL_HINT =
    '\r\nTo access a global variable in a function, bind it using the "${globalKeyword}" keyword:\r\n${globalKeyword} ${name}';
  ERROR_MESSAGE_WRITE_HINT =
    "\r\nPerhaps you've meant to use function ${write}() or ${write_inline}()?";
}
