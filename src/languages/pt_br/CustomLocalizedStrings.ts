import { CommonLocalizedStrings } from "../common/CommonLocalizedStrings";

export class CustomLocalizedStrings extends CommonLocalizedStrings {
  PANSCRIPT_HEADLINE = "PanScript – programe no seu idioma";
  LANGUAGE_SELECT_PROMPT = "Idioma:";
  THEME_SELECT_PROMPT = "Tema:";
  RUN_BUTTON_LABEL = "Executar";
  UNDO_BUTTON_LABEL = "Desfazer";
  REDO_BUTTON_LABEL = "Refazer";
  RELOAD_BUTTON_LABEL = "Recarregar";
  SAVE_BUTTON_LABEL = "Salvar";
  LOAD_BUTTON_LABEL = "Carregar";
  CLEAR_BUTTON_LABEL = "Limpar";
  EXPLORER_FOLDER_YOUR_FILES = "Seus Arquivos";
  EXPLORER_FOLDER_EXAMPLES = "Exemplos";
  EXPLORER_FOLDER_BASICS = "1 - Básico";
  EXPLORER_FOLDER_STANDARD_FUNCTIONS = "2 - Funções Padrão";
  EXPLORER_FOLDER_EXPRESSIONS = "3 - Expressões";
  EXPLORER_FOLDER_CONDITIONALS = "4 - Condicionais";
  EXPLORER_FOLDER_LOOPS = "5 - Loops";
  EXPLORER_FOLDER_USER_FUNCTIONS = "6 - Funções de Usuário";
  EXPLORER_FILE_MAIN = "Principal";
  EXPLORER_FILE_VARIABLES = "Variáveis";
  EXPLORER_FILE_TYPES = "Tipos";
  EXPLORER_FILE_CONSTANTS = "Constantes";
  EXPLORER_FILE_TEXT_INTERPOLATION = "Interpolação de Texto";
  EXPLORER_FILE_CONSOLE_FUNCTIONS = "Funções de Console";
  EXPLORER_FILE_TEXT_FUNCTIONS = "Funções de Texto";
  EXPLORER_FILE_MATH_FUNCTIONS = "Funções Matemáticas";
  EXPLORER_FILE_EXPRESSIONS = "Expressões";
  EXPLORER_FILE_IF = "Se";
  EXPLORER_FILE_ELSE = "Senão";
  EXPLORER_FILE_ELSE_IF = "Senão Se";
  EXPLORER_FILE_LOOPS = "Loops";
  EXPLORER_FILE_BREAK_AND_CONTINUE = "Interrompa e Continue";
  EXPLORER_FILE_FUNCTIONS = "Funções";
  EXPLORER_FILE_RECURSION = "Recursão";
  KEYWORD_TRUE = "verdadeiro";
  KEYWORD_FALSE = "falso";
  KEYWORD_BREAK = "interrompa";
  KEYWORD_CONSTANT = "constante";
  KEYWORD_CONTINUE = "continue";
  KEYWORD_ELSE = "senao";
  KEYWORD_END = "fim";
  KEYWORD_FOR = "para";
  KEYWORD_FOREVER = "para sempre";
  KEYWORD_FROM = "de";
  KEYWORD_FUNCTION = "funcao";
  KEYWORD_GLOBAL = "global";
  KEYWORD_IF = "se";
  KEYWORD_IN = "em";
  KEYWORD_RETURN = "retorne";
  KEYWORD_RETURNS = "retorna";
  KEYWORD_TO = "ate";
  KEYWORD_WHILE = "enquanto";
  KEYWORD_NOT = "nao";
  KEYWORD_AND = "e";
  KEYWORD_OR = "ou";
  KEYWORD_TYPES: { [type: string]: string } = {
    logical: "logico",
    number: "numero",
    text: "texto",
    none: "nenhum",
    any: "qualquer",
    "...T": "...T",
  };
  FUNCTION_WRITE = "escreva";
  FUNCTION_WRITE_INLINE = "escreva_na_linha";
  FUNCTION_NEW_LINE = "nova_linha";
  FUNCTION_CLEAR = "limpe";
  FUNCTION_TO_TEXT = "para_texto";
  FUNCTION_PAD_LEFT = "preencha_esquerda";
  FUNCTION_PAD_RIGHT = "preencha_direita";
  FUNCTION_LENGTH = "comprimento";
  FUNCTION_REPEAT = "repita";
  FUNCTION_UPPER_CASE = "maiusculas";
  FUNCTION_LOWER_CASE = "minusculas";
  FUNCTION_SENTENCE_CASE = "sentenca";
  FUNCTION_LEFT = "esquerda";
  FUNCTION_RIGHT = "direita";
  FUNCTION_MIDDLE = "meio";
  FUNCTION_SLICE_TEXT = "fatie_texto";
  FUNCTION_REVERSE_TEXT = "inverta_texto";
  FUNCTION_IN_TEXT = "no_texto";
  FUNCTION_POSITION = "posicao";
  FUNCTION_TRIM = "aparar";
  FUNCTION_TRIM_LEFT = "aparar_esquerda";
  FUNCTION_TRIM_RIGHT = "aparar_direita";
  FUNCTION_PI = "pi";
  FUNCTION_ABSOLUTE = "absoluto";
  FUNCTION_POWER = "potencia";
  FUNCTION_SQUARE_ROOT = "raiz_quadrada";
  FUNCTION_SINE = "seno";
  FUNCTION_COSINE = "cosseno";
  FUNCTION_TANGENT = "tangente";
  FUNCTION_ARC_SINE = "arco_seno";
  FUNCTION_ARC_COSINE = "arco_cosseno";
  FUNCTION_ARC_TANGENT = "arco_tangente";
  FUNCTION_EXPONENTIAL = "exponencial";
  FUNCTION_NATURAL_LOGARITHM = "logaritmo_natural";
  FUNCTION_LOGARITHM = "logaritmo";
  FUNCTION_FLOOR = "piso";
  FUNCTION_CEILING = "teto";
  FUNCTION_TRUNCATE = "trunque";
  FUNCTION_MINIMUM = "minimo";
  FUNCTION_MAXIMUM = "maximo";
  FUNCTION_RANDOM_REAL = "real_aleatorio";
  FUNCTION_RANDOM_INTEGER = "inteiro_aleatorio";
  FUNCTION_ROUND = "arredonde";
  FUNCTION_ROUND_N_PLACES = "arredonde_n_casas";
  FUNCTION_TRUNCATE_N_PLACES = "trunque_n_casas";
  ERROR = "Erro";
  ERROR_MESSAGE_END_OF_CODE_TOKEN = "o fim do código";
  ERROR_MESSAGE_END_OF_LINE_TOKEN = "o fim da linha";
  ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN =
    "Erro: Não consegui entender o código na linha ${line}, coluna ${charPositionInLine}";
  ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX =
    "Erro na linha ${line}:\r\nNão esperava encontrar ${symbolDescription}";
  ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED =
    "Erro na linha ${line}:\r\nO identificador de nome ${name} está sendo definido uma segunda vez";
  ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH =
    "Erro na linha ${line}:\r\nEsperava que o tipo de ${name} fosse ${expectedType}, mas era ${actualType}";
  ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT =
    'Erro na linha ${line}:\r\nNão posso alterar o valor de ${name} porque foi declarado como "${constantKeyword}"';
  ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER =
    "Erro na linha ${line}:\r\nNão pude encontrar o identificador de nome ${name} no escopo atual";
  ERROR_MESSAGE_TEMPLATE_ARGUMENTS_NUMBER =
    "Erro na linha ${line}:\r\nA função ${name} espera ${argumentsExpected} argumento(s), mas encontrei ${argumentsGiven} no lugar";
  ERROR_MESSAGE_GLOBAL_HINT =
    '\r\nPara acessar uma variável global dentro de uma função, vincule-a usando a palavra-chave "${globalKeyword}":\r\n${globalKeyword} ${name}';
  ERROR_MESSAGE_WRITE_HINT =
    "\r\nTalvez você tenha tentado usar a função ${write}() ou ${write_inline}()?";
}
