import { CommonLocalizedStrings } from "../common/CommonLocalizedStrings";

export class CustomLocalizedStrings extends CommonLocalizedStrings {
  // TODO: translate
  PANSCRIPT_HEADLINE = "PanScript – programme dans votre langue";
  LANGUAGE_SELECT_PROMPT = "Langue:";
  THEME_SELECT_PROMPT = "Thème:";
  RUN_BUTTON_LABEL = "Éxécuter";
  UNDO_BUTTON_LABEL = "Anuler";
  REDO_BUTTON_LABEL = "Refaire";
  RELOAD_BUTTON_LABEL = "Recharger";
  SAVE_BUTTON_LABEL = "Enregistrer";
  LOAD_BUTTON_LABEL = "Télécharger";
  CLEAR_BUTTON_LABEL = "Effacer";
  EXPLORER_FOLDER_YOUR_FILES = "Vos Fichiers";
  EXPLORER_FOLDER_EXAMPLES = "Exemples";
  EXPLORER_FOLDER_BASICS = "1 - Basique";
  EXPLORER_FOLDER_STANDARD_FUNCTIONS = "2 - Fonctions standard";
  EXPLORER_FOLDER_EXPRESSIONS = "3 - Expressions";
  EXPLORER_FOLDER_CONDITIONALS = "4 - Conditionnels";
  EXPLORER_FOLDER_LOOPS = "5 - Boucles";
  EXPLORER_FOLDER_USER_FUNCTIONS = "6 - Fonctions d'utilisateur";
  EXPLORER_FILE_MAIN = "Principale";
  EXPLORER_FILE_VARIABLES = "Variables";
  EXPLORER_FILE_TYPES = "Types";
  EXPLORER_FILE_CONSTANTS = "Constantes";
  EXPLORER_FILE_TEXT_INTERPOLATION = "Interpolation de texte";
  EXPLORER_FILE_CONSOLE_FUNCTIONS = "Fonctions de la console";
  EXPLORER_FILE_TEXT_FUNCTIONS = "Fonctions de texte";
  EXPLORER_FILE_MATH_FUNCTIONS = "Fonctions mathematiques";
  EXPLORER_FILE_EXPRESSIONS = "Expressions";
  EXPLORER_FILE_IF = "Si";
  EXPLORER_FILE_ELSE = "Sinon";
  EXPLORER_FILE_ELSE_IF = "Sinon si";
  EXPLORER_FILE_LOOPS = "Boucles";
  EXPLORER_FILE_BREAK_AND_CONTINUE = "Arrêter et Continuer";
  EXPLORER_FILE_FUNCTIONS = "Fonctions";
  EXPLORER_FILE_RECURSION = "Recursion";
  KEYWORD_TRUE = "vrai";
  KEYWORD_FALSE = "faux";
  KEYWORD_BREAK = "interromps";
  KEYWORD_CONSTANT = "constant";
  KEYWORD_CONTINUE = "continue";
  KEYWORD_ELSE = "sinon";
  KEYWORD_END = "fin";
  KEYWORD_FOR = "pour";
  KEYWORD_FOREVER = "pour toujours";
  KEYWORD_FROM = "de";
  KEYWORD_FUNCTION = "fonction";
  KEYWORD_GLOBAL = "global";
  KEYWORD_IF = "si";
  KEYWORD_IN = "en";
  KEYWORD_RETURN = "retourne";
  KEYWORD_RETURNS = "renvoie";
  KEYWORD_TO = "jusqua";
  KEYWORD_WHILE = "tant que";
  KEYWORD_NOT = "non";
  KEYWORD_AND = "et";
  KEYWORD_OR = "ou";
  KEYWORD_TYPES: { [type: string]: string } = {
    logical: "logique",
    number: "nombre",
    text: "texte",
    none: "rien",
    any: "tout",
    "...T": "...T",
  };
  FUNCTION_WRITE = "ecrire";
  FUNCTION_WRITE_INLINE = "ecrire_dans_la_ligne";
  FUNCTION_NEW_LINE = "nouvelle_ligne";
  FUNCTION_CLEAR = "nettoyer";
  FUNCTION_TO_TEXT = "vers_texte";
  FUNCTION_PAD_LEFT = "remplir_gauche";
  FUNCTION_PAD_RIGHT = "remplir_droite";
  FUNCTION_LENGTH = "longueur";
  FUNCTION_REPEAT = "repeter";
  FUNCTION_UPPER_CASE = "majuscule";
  FUNCTION_LOWER_CASE = "minuscule";
  FUNCTION_SENTENCE_CASE = "phrase";
  FUNCTION_LEFT = "gauche";
  FUNCTION_RIGHT = "droite";
  FUNCTION_MIDDLE = "milieu";
  FUNCTION_SLICE_TEXT = "trancher_le_texte";
  FUNCTION_REVERSE_TEXT = "inverser_le_texte";
  FUNCTION_IN_TEXT = "dans_le_texte";
  FUNCTION_POSITION = "position";
  FUNCTION_TRIM = "couper";
  FUNCTION_TRIM_LEFT = "couper_gauche";
  FUNCTION_TRIM_RIGHT = "couper_droite";
  FUNCTION_PI = "pi";
  FUNCTION_ABSOLUTE = "absolute";
  FUNCTION_POWER = "puissance";
  FUNCTION_SQUARE_ROOT = "racine_carree";
  FUNCTION_SINE = "sinus";
  FUNCTION_COSINE = "cosinus";
  FUNCTION_TANGENT = "tangente";
  FUNCTION_ARC_SINE = "arc_sinus";
  FUNCTION_ARC_COSINE = "arc_cosinus";
  FUNCTION_ARC_TANGENT = "arc_tangente";
  FUNCTION_EXPONENTIAL = "exponentiel";
  FUNCTION_NATURAL_LOGARITHM = "logarithme_naturel";
  FUNCTION_LOGARITHM = "logarithme";
  FUNCTION_FLOOR = "plancher";
  FUNCTION_CEILING = "plafond";
  FUNCTION_TRUNCATE = "tronquer";
  FUNCTION_MINIMUM = "minimum";
  FUNCTION_MAXIMUM = "maximum";
  FUNCTION_RANDOM_REAL = "aleatoire_reel";
  FUNCTION_RANDOM_INTEGER = "aleatoire_entier";
  FUNCTION_ROUND = "arrondir";
  FUNCTION_ROUND_N_PLACES = "arrondir_n_places";
  FUNCTION_TRUNCATE_N_PLACES = "tronquer_n_places";
  ERROR = "Erreur";
  ERROR_MESSAGE_END_OF_CODE_TOKEN = "la fin du code";
  ERROR_MESSAGE_END_OF_LINE_TOKEN = "la fin de la ligne";
  ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN =
    "Erreur: je n'ai pas compris le code de la ligne ${line}, colone ${charPositionInLine}";
  ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX =
    "Erreur dans la ligne ${line}:\r\nJe ne m'attendais pas à trouver ${symbolDescription}";
  ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED =
    "Erreur dans la ligne ${line}:\r\nL'identifiant qui porte le nom ${name} est défini une deuxième fois";
  ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH =
    "Erreur dans la ligne ${line}:\r\nJe m'attendais que le type de ${name} soit ${expectedType}, mais c'était ${actualType}";
  ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT =
    'Erreur dans la ligne ${line}:\r\nJe ne peux pas changer la valeur de ${name} parce que qu\'il a été declaré comme "${constantKeyword}"';
  ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER =
    "Erreur dans la ligne ${line}:\r\nJe n'ai pas trouvé l'identifiant avec le nom ${name} dans la portée actuelle";
  ERROR_MESSAGE_TEMPLATE_ARGUMENTS_NUMBER =
    // TODO
    "Erreur dans la ligne ${line}:\r\nA função ${name} espera ${argumentsExpected} argumento(s), mas encontrei ${argumentsGiven} no lugar";
  ERROR_MESSAGE_GLOBAL_HINT =
    '\r\nPour accéder à une variable globale dans une fonction, associez-la à l\'aide du mot-clé "${globalKeyword}":\r\n${globalKeyword} ${name}';
  ERROR_MESSAGE_WRITE_HINT =
    "\r\nPeut-être avez-vous essayé d'utiliser la fonction ${write}() ou bien ${write_inline}()?";
}
