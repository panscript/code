import { ASTNode } from "../CommonASTNode";
import { SymbolTable } from "../CommonSymbolTable";
import { CommonStandardLibrary } from "../common/CommonStandardLibrary";
import { CustomLocalizedStrings } from "./CustomLocalizedStrings";

export class CustomStandardLibrary extends CommonStandardLibrary {
  private static readonly localizedStrings = new CustomLocalizedStrings();

  static getStandardLibrarySymbolTable(): SymbolTable {
    const table = new SymbolTable();

    // input/output
    table.pushNode(super.getWriteDefinitionNode());
    table.pushNode(this.getWriteDefinitionNode());
    table.pushNode(super.getWriteInlineDefinitionNode());
    table.pushNode(this.getWriteInlineDefinitionNode());
    table.pushNode(super.getNewLineDefinitionNode());
    table.pushNode(this.getNewLineDefinitionNode());
    table.pushNode(super.getClearDefinitionNode());
    table.pushNode(this.getClearDefinitionNode());

    // text
    table.pushNode(super.getToTextDefinitionNode());
    table.pushNode(this.getToTextDefinitionNode());
    table.pushNode(super.getPadLeftDefinitionNode());
    table.pushNode(this.getPadLeftDefinitionNode());
    table.pushNode(super.getPadRightDefinitionNode());
    table.pushNode(this.getPadRightDefinitionNode());
    table.pushNode(super.getLengthDefinitionNode());
    table.pushNode(this.getLengthDefinitionNode());
    table.pushNode(super.getRepeatDefinitionNode());
    table.pushNode(this.getRepeatDefinitionNode());
    table.pushNode(super.getUpperCaseDefinitionNode());
    table.pushNode(this.getUpperCaseDefinitionNode());
    table.pushNode(super.getLowerCaseDefinitionNode());
    table.pushNode(this.getLowerCaseDefinitionNode());
    table.pushNode(super.getSentenceCaseDefinitionNode());
    table.pushNode(this.getSentenceCaseDefinitionNode());
    table.pushNode(super.getLeftDefinitionNode());
    table.pushNode(this.getLeftDefinitionNode());
    table.pushNode(super.getRightDefinitionNode());
    table.pushNode(this.getRightDefinitionNode());
    table.pushNode(super.getMiddleDefinitionNode());
    table.pushNode(this.getMiddleDefinitionNode());
    table.pushNode(super.getSliceTextDefinitionNode());
    table.pushNode(this.getSliceTextDefinitionNode());
    table.pushNode(super.getReverseTextDefinitionNode());
    table.pushNode(this.getReverseTextDefinitionNode());
    table.pushNode(super.getInTextDefinitionNode());
    table.pushNode(this.getInTextDefinitionNode());
    table.pushNode(super.getPositionDefinitionNode());
    table.pushNode(this.getPositionDefinitionNode());
    table.pushNode(super.getTrimDefinitionNode());
    table.pushNode(this.getTrimDefinitionNode());
    table.pushNode(super.getTrimLeftDefinitionNode());
    table.pushNode(this.getTrimLeftDefinitionNode());
    table.pushNode(super.getTrimRightDefinitionNode());
    table.pushNode(this.getTrimRightDefinitionNode());

    // math
    table.pushNode(super.getPiDefinitionNode());
    table.pushNode(this.getPiDefinitionNode());
    table.pushNode(super.getAbsoluteDefinitionNode());
    table.pushNode(this.getAbsoluteDefinitionNode());
    table.pushNode(super.getPowerDefinitionNode());
    table.pushNode(this.getPowerDefinitionNode());
    table.pushNode(super.getSquareRootDefinitionNode());
    table.pushNode(this.getSquareRootDefinitionNode());
    table.pushNode(super.getSineDefinitionNode());
    table.pushNode(this.getSineDefinitionNode());
    table.pushNode(super.getCosineDefinitionNode());
    table.pushNode(this.getCosineDefinitionNode());
    table.pushNode(super.getTangentDefinitionNode());
    table.pushNode(this.getTangentDefinitionNode());
    table.pushNode(super.getArcSineDefinitionNode());
    table.pushNode(this.getArcSineDefinitionNode());
    table.pushNode(super.getArcCosineDefinitionNode());
    table.pushNode(this.getArcCosineDefinitionNode());
    table.pushNode(super.getArcTangentDefinitionNode());
    table.pushNode(this.getArcTangentDefinitionNode());
    table.pushNode(super.getExponentialDefinitionNode());
    table.pushNode(this.getExponentialDefinitionNode());
    table.pushNode(super.getNaturalLogarithmDefinitionNode());
    table.pushNode(this.getNaturalLogarithmDefinitionNode());
    table.pushNode(super.getLogarithmDefinitionNode());
    table.pushNode(this.getLogarithmDefinitionNode());
    table.pushNode(super.getFloorDefinitionNode());
    table.pushNode(this.getFloorDefinitionNode());
    table.pushNode(super.getCeilingDefinitionNode());
    table.pushNode(this.getCeilingDefinitionNode());
    table.pushNode(super.getTruncateDefinitionNode());
    table.pushNode(this.getTruncateDefinitionNode());
    table.pushNode(super.getMinimumDefinitionNode());
    table.pushNode(this.getMinimumDefinitionNode());
    table.pushNode(super.getMaximumDefinitionNode());
    table.pushNode(this.getMaximumDefinitionNode());
    table.pushNode(super.getRandomRealDefinitionNode());
    table.pushNode(this.getRandomRealDefinitionNode());
    table.pushNode(super.getRandomIntegerDefinitionNode());
    table.pushNode(this.getRandomIntegerDefinitionNode());
    table.pushNode(super.getRoundDefinitionNode());
    table.pushNode(this.getRoundDefinitionNode());
    table.pushNode(super.getRoundNPlacesDefinitionNode());
    table.pushNode(this.getRoundNPlacesDefinitionNode());
    table.pushNode(super.getTruncateNPlacesDefinitionNode());
    table.pushNode(this.getTruncateNPlacesDefinitionNode());

    return table;
  }

  protected static getWriteDefinitionNode(): ASTNode {
    const node = super.getWriteDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_WRITE;
    const toTextFunctionName = this.localizedStrings.FUNCTION_TO_TEXT;
    node.code = `
      function ${node.name}(x) {
        return __standard_write(${toTextFunctionName}(x));
      }
    `;

    return node;
  }

  protected static getWriteInlineDefinitionNode(): ASTNode {
    const node = super.getWriteInlineDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_WRITE_INLINE;
    const toTextFunctionName = this.localizedStrings.FUNCTION_TO_TEXT;
    node.code = `
      function ${node.name}(x) {
        return __standard_write_inline(${toTextFunctionName}(x));
      }
    `;

    return node;
  }

  protected static getNewLineDefinitionNode(): ASTNode {
    const node = super.getNewLineDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_NEW_LINE;
    node.code = `
      function ${node.name}() {
        return __standard_new_line();
      }
    `;

    return node;
  }

  protected static getClearDefinitionNode(): ASTNode {
    const node = super.getClearDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_CLEAR;
    node.code = `
      function ${node.name}() {
        return __standard_clear();
      }
    `;

    return node;
  }

  protected static getToTextDefinitionNode(): ASTNode {
    const node = super.getToTextDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TO_TEXT;
    node.code = `
      function ${node.name}(x) {
        return __standard_to_text(x);
      }
    `;

    return node;
  }

  protected static getPadLeftDefinitionNode(): ASTNode {
    const node = super.getPadLeftDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_PAD_LEFT;
    node.code = `
      function ${node.name}(text, length, padding) {
        return __standard_pad_left(text, length, padding);
      }
    `;

    return node;
  }

  protected static getPadRightDefinitionNode(): ASTNode {
    const node = super.getPadRightDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_PAD_RIGHT;
    node.code = `
      function ${node.name}(text, length, padding) {
        return __standard_pad_right(text, length, padding);
      }
    `;

    return node;
  }

  protected static getLengthDefinitionNode(): ASTNode {
    const node = super.getLengthDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_LENGTH;
    node.code = `
      function ${node.name}(text) {
        return __standard_length(text);
      }
    `;

    return node;
  }

  protected static getRepeatDefinitionNode(): ASTNode {
    const node = super.getRepeatDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_REPEAT;
    node.code = `
      function ${node.name}(text, count) {
        return __standard_repeat(text, count);
      }
    `;

    return node;
  }

  protected static getUpperCaseDefinitionNode(): ASTNode {
    const node = super.getUpperCaseDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_UPPER_CASE;
    node.code = `
      function ${node.name}(text) {
        return __standard_upper_case(text);
      }
    `;

    return node;
  }

  protected static getLowerCaseDefinitionNode(): ASTNode {
    const node = super.getLowerCaseDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_LOWER_CASE;
    node.code = `
      function ${node.name}(text) {
        return __standard_lower_case(text);
      }
    `;

    return node;
  }

  protected static getSentenceCaseDefinitionNode(): ASTNode {
    const node = super.getSentenceCaseDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_SENTENCE_CASE;
    node.code = `
      function ${node.name}(text) {
        return __standard_sentence_case(text);
      }
    `;

    return node;
  }

  protected static getLeftDefinitionNode(): ASTNode {
    const node = super.getLeftDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_LEFT;
    node.code = `
      function ${node.name}(text, count) {
        return __standard_left(text, count);
      }
    `;

    return node;
  }

  protected static getRightDefinitionNode(): ASTNode {
    const node = super.getRightDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_RIGHT;
    node.code = `
      function ${node.name}(text, count) {
        return __standard_right(text, count);
      }
    `;

    return node;
  }

  protected static getMiddleDefinitionNode(): ASTNode {
    const node = super.getMiddleDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_MIDDLE;
    node.code = `
      function ${node.name}(text, position, count) {
        return __standard_middle(text, position, count);
      }
    `;

    return node;
  }

  protected static getSliceTextDefinitionNode(): ASTNode {
    const node = super.getSliceTextDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_SLICE_TEXT;
    node.code = `
      function ${node.name}(text, start, end) {
        return __standard_slice_text(text, start, end);
      }
    `;

    return node;
  }

  protected static getReverseTextDefinitionNode(): ASTNode {
    const node = super.getReverseTextDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_REVERSE_TEXT;
    node.code = `
      function ${node.name}(text) {
        return __standard_reverse_text(text);
      }
    `;

    return node;
  }

  protected static getInTextDefinitionNode(): ASTNode {
    const node = super.getInTextDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_IN_TEXT;
    node.code = `
      function ${node.name}(text, search_text) {
        return __standard_in_text(text, search_text);
      }
    `;

    return node;
  }

  protected static getPositionDefinitionNode(): ASTNode {
    const node = super.getPositionDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_POSITION;
    node.code = `
      function ${node.name}(text, search_text) {
        return __standard_position(text, search_text);
      }
    `;

    return node;
  }

  protected static getTrimDefinitionNode(): ASTNode {
    const node = super.getTrimDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TRIM;
    node.code = `
      function ${node.name}(text) {
        return __standard_trim(text);
      }
    `;

    return node;
  }

  protected static getTrimLeftDefinitionNode(): ASTNode {
    const node = super.getTrimLeftDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TRIM_LEFT;
    node.code = `
      function ${node.name}(text) {
        return __standard_trim_left(text);
      }
    `;

    return node;
  }

  protected static getTrimRightDefinitionNode(): ASTNode {
    const node = super.getTrimRightDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TRIM_RIGHT;
    node.code = `
      function ${node.name}(text) {
        return __standard_trim_right(text);
      }
    `;

    return node;
  }

  protected static getPiDefinitionNode(): ASTNode {
    const node = super.getPiDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_PI;
    node.code = `
      function ${node.name}() {
        return __standard_pi();
      }
    `;

    return node;
  }

  protected static getAbsoluteDefinitionNode(): ASTNode {
    const node = super.getAbsoluteDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_ABSOLUTE;
    node.code = `
      function ${node.name}(x) {
        return __standard_absolute(x);
      }
    `;

    return node;
  }

  protected static getPowerDefinitionNode(): ASTNode {
    const node = super.getPowerDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_POWER;
    node.code = `
      function ${node.name}(x, n) {
        return __standard_power(x, n);
      }
    `;

    return node;
  }

  protected static getSquareRootDefinitionNode(): ASTNode {
    const node = super.getSquareRootDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_SQUARE_ROOT;
    node.code = `
      function ${node.name}(x) {
        return __standard_square_root(x);
      }
    `;

    return node;
  }

  protected static getSineDefinitionNode(): ASTNode {
    const node = super.getSineDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_SINE;
    node.code = `
      function ${node.name}(x) {
        return __standard_sine(x);
      }
    `;

    return node;
  }

  protected static getCosineDefinitionNode(): ASTNode {
    const node = super.getCosineDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_COSINE;
    node.code = `
      function ${node.name}(x) {
        return __standard_cosine(x);
      }
    `;

    return node;
  }

  protected static getTangentDefinitionNode(): ASTNode {
    const node = super.getTangentDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TANGENT;
    node.code = `
      function ${node.name}(x) {
        return __standard_tangent(x);
      }
    `;

    return node;
  }

  protected static getArcSineDefinitionNode(): ASTNode {
    const node = super.getArcSineDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_ARC_SINE;
    node.code = `
      function ${node.name}(x) {
        return __standard_arc_sine(x);
      }
    `;

    return node;
  }

  protected static getArcCosineDefinitionNode(): ASTNode {
    const node = super.getArcCosineDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_ARC_COSINE;
    node.code = `
      function ${node.name}(x) {
        return __standard_arc_cosine(x);
      }
    `;

    return node;
  }

  protected static getArcTangentDefinitionNode(): ASTNode {
    const node = super.getArcTangentDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_ARC_TANGENT;
    node.code = `
      function ${node.name}(x) {
        return __standard_arc_tangent(x);
      }
    `;

    return node;
  }

  protected static getExponentialDefinitionNode(): ASTNode {
    const node = super.getExponentialDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_EXPONENTIAL;
    node.code = `
      function ${node.name}(x) {
        return __standard_exponential(x);
      }
    `;

    return node;
  }

  protected static getNaturalLogarithmDefinitionNode(): ASTNode {
    const node = super.getNaturalLogarithmDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_NATURAL_LOGARITHM;
    node.code = `
      function ${node.name}(x) {
        return __standard_natural_logarithm(x);
      }
    `;

    return node;
  }

  protected static getLogarithmDefinitionNode(): ASTNode {
    const node = super.getLogarithmDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_LOGARITHM;
    node.code = `
      function ${node.name}(x, b) {
        return __standard_logarithm(x, b);
      }
    `;

    return node;
  }

  protected static getFloorDefinitionNode(): ASTNode {
    const node = super.getFloorDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_FLOOR;
    node.code = `
      function ${node.name}(x) {
        return __standard_floor(x);
      }
    `;

    return node;
  }

  protected static getCeilingDefinitionNode(): ASTNode {
    const node = super.getCeilingDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_CEILING;
    node.code = `
      function ${node.name}(x) {
        return __standard_ceiling(x);
      }
    `;

    return node;
  }

  protected static getTruncateDefinitionNode(): ASTNode {
    const node = super.getTruncateDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TRUNCATE;
    node.code = `
      function ${node.name}(x) {
        return __standard_truncate(x);
      }
    `;

    return node;
  }

  protected static getMinimumDefinitionNode(): ASTNode {
    const node = super.getMinimumDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_MINIMUM;
    node.code = `
      function ${node.name}(x, y) {
        return __standard_minimum(x, y);
      }
    `;

    return node;
  }

  protected static getMaximumDefinitionNode(): ASTNode {
    const node = super.getMaximumDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_MAXIMUM;
    node.code = `
      function ${node.name}(x, y) {
        return __standard_maximum(x, y);
      }
    `;

    return node;
  }

  protected static getRandomRealDefinitionNode(): ASTNode {
    const node = super.getRandomRealDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_RANDOM_REAL;
    node.code = `
      function ${node.name}(a, b) {
        return __standard_random_real(a, b);
      }
    `;

    return node;
  }

  protected static getRandomIntegerDefinitionNode(): ASTNode {
    const node = super.getRandomIntegerDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_RANDOM_INTEGER;
    node.code = `
      function ${node.name}(a, b) {
        return __standard_random_integer(a, b);
      }
    `;

    return node;
  }

  protected static getRoundDefinitionNode(): ASTNode {
    const node = super.getRoundDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_ROUND;
    node.code = `
      function ${node.name}(x) {
        return __standard_round(x);
      }
    `;

    return node;
  }

  protected static getRoundNPlacesDefinitionNode(): ASTNode {
    const node = super.getRoundNPlacesDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_ROUND_N_PLACES;
    node.code = `
      function ${node.name}(x, n) {
        return __standard_round_n_places(x, n);
      }
    `;

    return node;
  }

  protected static getTruncateNPlacesDefinitionNode(): ASTNode {
    const node = super.getTruncateNPlacesDefinitionNode();

    node.name = this.localizedStrings.FUNCTION_TRUNCATE_N_PLACES;
    node.code = `
      function ${node.name}(x, n) {
        return __standard_truncate_n_places(x, n);
      }
    `;

    return node;
  }
}
