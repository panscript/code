import { ASTNode, PanType, PanTypePart } from "../CommonASTNode";
import { SymbolTable } from "../CommonSymbolTable";

export class CommonStandardLibrary {
  static getStandardLibrarySymbolTable(): SymbolTable {
    const table = new SymbolTable();

    // input/output
    table.pushNode(this.getWriteDefinitionNode());
    table.pushNode(this.getWriteInlineDefinitionNode());
    table.pushNode(this.getNewLineDefinitionNode());
    table.pushNode(this.getClearDefinitionNode());

    // text
    table.pushNode(this.getToTextDefinitionNode());
    table.pushNode(this.getPadLeftDefinitionNode());
    table.pushNode(this.getPadRightDefinitionNode());
    table.pushNode(this.getLengthDefinitionNode());
    table.pushNode(this.getRepeatDefinitionNode());
    table.pushNode(this.getUpperCaseDefinitionNode());
    table.pushNode(this.getLowerCaseDefinitionNode());
    table.pushNode(this.getSentenceCaseDefinitionNode());
    table.pushNode(this.getLeftDefinitionNode());
    table.pushNode(this.getRightDefinitionNode());
    table.pushNode(this.getMiddleDefinitionNode());
    table.pushNode(this.getSliceTextDefinitionNode());
    table.pushNode(this.getReverseTextDefinitionNode());
    table.pushNode(this.getInTextDefinitionNode());
    table.pushNode(this.getPositionDefinitionNode());
    table.pushNode(this.getTrimDefinitionNode());
    table.pushNode(this.getTrimLeftDefinitionNode());
    table.pushNode(this.getTrimRightDefinitionNode());

    // math
    table.pushNode(this.getPiDefinitionNode());
    table.pushNode(this.getAbsoluteDefinitionNode());
    table.pushNode(this.getPowerDefinitionNode());
    table.pushNode(this.getSquareRootDefinitionNode());
    table.pushNode(this.getSineDefinitionNode());
    table.pushNode(this.getCosineDefinitionNode());
    table.pushNode(this.getTangentDefinitionNode());
    table.pushNode(this.getArcSineDefinitionNode());
    table.pushNode(this.getArcCosineDefinitionNode());
    table.pushNode(this.getArcTangentDefinitionNode());
    table.pushNode(this.getExponentialDefinitionNode());
    table.pushNode(this.getNaturalLogarithmDefinitionNode());
    table.pushNode(this.getLogarithmDefinitionNode());
    table.pushNode(this.getFloorDefinitionNode());
    table.pushNode(this.getCeilingDefinitionNode());
    table.pushNode(this.getTruncateDefinitionNode());
    table.pushNode(this.getMinimumDefinitionNode());
    table.pushNode(this.getMaximumDefinitionNode());
    table.pushNode(this.getRandomRealDefinitionNode());
    table.pushNode(this.getRandomIntegerDefinitionNode());
    table.pushNode(this.getRoundDefinitionNode());
    table.pushNode(this.getRoundNPlacesDefinitionNode());
    table.pushNode(this.getTruncateNPlacesDefinitionNode());

    return table;
  }

  protected static getWriteDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_write";
    node.code = `
      function ${node.name}(x) {
        xterm.writeln(x);
      }
    `;
    node.type = new PanType([]);
    node.argList = [["x", new PanType([PanTypePart.Any])]];

    return node;
  }

  protected static getWriteInlineDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_write_inline";
    node.code = `
      function ${node.name}(x) {
        xterm.write(x);
      }
    `;
    node.type = new PanType([]);
    node.argList = [["x", new PanType([PanTypePart.Any])]];

    return node;
  }

  protected static getNewLineDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_new_line";
    node.code = `
      function ${node.name}() {
        xterm.writeln("");
      }
    `;
    node.type = new PanType([]);
    node.argList = [];

    return node;
  }

  protected static getClearDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_clear";
    node.code = `
      function ${node.name}() {
        xterm.clear();
        xterm.refresh(0, xterm.rows - 1);
      }
    `;
    node.type = new PanType([]);
    node.argList = [];

    return node;
  }

  protected static getToTextDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_to_text";
    node.code = `
      function ${node.name}(x) {
        if (Array.isArray(x)) {
          return "[" + x.toString() + "]";
        }

        return x.toString();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["x", new PanType([PanTypePart.Any])]];

    return node;
  }

  protected static getPadLeftDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_pad_left";
    node.code = `
      function ${node.name}(text, length, padding) {
        return text.padStart(length, padding);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["length", PanType.numberType()],
      ["padding", PanType.textType()],
    ];

    return node;
  }

  protected static getPadRightDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_pad_right";
    node.code = `
      function ${node.name}(text, length, padding) {
        return text.padEnd(length, padding);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["length", PanType.numberType()],
      ["padding", PanType.textType()],
    ];

    return node;
  }

  protected static getLengthDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_length";
    node.code = `
      function ${node.name}(text) {
        return text.length;
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getRepeatDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_repeat";
    node.code = `
      function ${node.name}(text, count) {
        return text.repeat(count);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["count", PanType.numberType()],
    ];

    return node;
  }

  protected static getUpperCaseDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_upper_case";
    node.code = `
      function ${node.name}(text) {
        return text.toUpperCase();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getLowerCaseDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_lower_case";
    node.code = `
      function ${node.name}(text) {
        return text.toLowerCase();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getSentenceCaseDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_sentence_case";
    node.code = `
      function ${node.name}(text) {
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getLeftDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_left";
    node.code = `
      function ${node.name}(text, count) {
        return text.slice(0, count);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["count", PanType.numberType()],
    ];

    return node;
  }

  protected static getRightDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_right";
    node.code = `
      function ${node.name}(text, count) {
        return text.slice(-count);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["count", PanType.numberType()],
    ];

    return node;
  }

  protected static getMiddleDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_middle";
    node.code = `
      function ${node.name}(text, position, count) {
        return text.slice(position, position + count);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["position", PanType.numberType()],
      ["count", PanType.numberType()],
    ];

    return node;
  }

  protected static getSliceTextDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_slice_text";
    node.code = `
      function ${node.name}(text, start, end) {
        return text.slice(start, end);
      }
    `;
    node.type = PanType.textType();
    node.argList = [
      ["text", PanType.textType()],
      ["start", PanType.numberType()],
      ["end", PanType.numberType()],
    ];

    return node;
  }

  protected static getReverseTextDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_reverse_text";
    node.code = `
      function ${node.name}(text) {
        return text.split("").reverse().join("");
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getInTextDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_in_text";
    node.code = `
      function ${node.name}(text, search_text) {
        return text.includes(search_text);
      }
    `;
    node.type = PanType.logicalType();
    node.argList = [
      ["text", PanType.textType()],
      ["search_text", PanType.textType()],
    ];

    return node;
  }

  protected static getPositionDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_position";
    node.code = `
      function ${node.name}(text, search_text) {
        return text.indexOf(search_text);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["text", PanType.textType()],
      ["search_text", PanType.textType()],
    ];

    return node;
  }

  protected static getTrimDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_trim";
    node.code = `
      function ${node.name}(text) {
        return text.trim();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getTrimLeftDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_trim_left";
    node.code = `
      function ${node.name}(text) {
        return text.trimStart();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getTrimRightDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_trim_right";
    node.code = `
      function ${node.name}(text) {
        return text.trimEnd();
      }
    `;
    node.type = PanType.textType();
    node.argList = [["text", PanType.textType()]];

    return node;
  }

  protected static getPiDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_pi";
    node.code = `
      function ${node.name}() {
        return Math.PI;
      }
    `;
    node.type = PanType.numberType();
    node.argList = [];

    return node;
  }

  protected static getAbsoluteDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_absolute";
    node.code = `
      function ${node.name}(x) {
        return Math.abs(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getPowerDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_power";
    node.code = `
      function ${node.name}(x, n) {
        return Math.pow(x, n);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["x", PanType.numberType()],
      ["n", PanType.numberType()],
    ];

    return node;
  }

  protected static getSquareRootDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_square_root";
    node.code = `
      function ${node.name}(x) {
        return Math.sqrt(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getSineDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_sine";
    node.code = `
      function ${node.name}(x) {
        return Math.sin(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getCosineDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_cosine";
    node.code = `
      function ${node.name}(x) {
        return Math.cos(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getTangentDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_tangent";
    node.code = `
      function ${node.name}(x) {
        return Math.tan(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getArcSineDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_arc_sine";
    node.code = `
      function ${node.name}(x) {
        return Math.asin(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getArcCosineDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_arc_cosine";
    node.code = `
      function ${node.name}(x) {
        return Math.acos(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getArcTangentDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_arc_tangent";
    node.code = `
      function ${node.name}(x) {
        return Math.atan(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getExponentialDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_exponential";
    node.code = `
      function ${node.name}(x) {
        return Math.exp(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getNaturalLogarithmDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_natural_logarithm";
    node.code = `
      function ${node.name}(x) {
        return Math.log(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getLogarithmDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_logarithm";
    node.code = `
      function ${node.name}(x, b) {
        return Math.log(x) / Math.log(b);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["x", PanType.numberType()],
      ["b", PanType.numberType()],
    ];

    return node;
  }

  protected static getFloorDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_floor";
    node.code = `
      function ${node.name}(x) {
        return Math.floor(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getCeilingDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_ceiling";
    node.code = `
      function ${node.name}(x) {
        return Math.ceil(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getTruncateDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_truncate";
    node.code = `
      function ${node.name}(x) {
        return Math.trunc(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getMinimumDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_minimum";
    node.code = `
      function ${node.name}(x, y) {
        return Math.min(x, y);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["x", PanType.numberType()],
      ["y", PanType.numberType()],
    ];

    return node;
  }

  protected static getMaximumDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_maximum";
    node.code = `
      function ${node.name}(x, y) {
        return Math.max(x, y);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["x", PanType.numberType()],
      ["y", PanType.numberType()],
    ];

    return node;
  }

  protected static getRandomRealDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_random_real";
    node.code = `
      function ${node.name}(a, b) {
        // source: MDN
        return Math.random() * (b - a) + a; // [a, b)
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["a", PanType.numberType()],
      ["b", PanType.numberType()],
    ];

    return node;
  }

  protected static getRandomIntegerDefinitionNode(): ASTNode {
    const node = new ASTNode();

    node.name = "__standard_random_integer";
    node.code = `
      function ${node.name}(a, b) {
        // source: MDN
        a = Math.ceil(a);
        b = Math.floor(b);
        return Math.floor(Math.random() * (b - a) + a); // [a, b)
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["a", PanType.numberType()],
      ["b", PanType.numberType()],
    ];

    return node;
  }

  protected static getRoundDefinitionNode(): ASTNode {
    // round midpoint away from zero
    // needed because JS rounds midpoint towards +Infinity
    // and that's less intuitive for negative numbers
    // i.e.,  0.5 -> 1
    //       -0.5 -> 0
    const node = new ASTNode();

    node.name = "__standard_round";
    node.code = `
      function ${node.name}(x) {
        return Math.round(Math.abs(x)) * Math.sign(x);
      }
    `;
    node.type = PanType.numberType();
    node.argList = [["x", PanType.numberType()]];

    return node;
  }

  protected static getRoundNPlacesDefinitionNode(): ASTNode {
    // round to n decimal places
    // needed because floating-point arithmetics
    // is complicated due to rounding errors
    // i.e., round(1.005, 2) -> 1.01
    //       round(1.3549999999999998, 2) -> 1.35
    const node = new ASTNode();

    node.name = "__standard_round_n_places";
    node.code = `
      function ${node.name}(x, n) {
        // source: MDN
        // convert to e notation
        let parts = (x + "e").split("e");

        // shift and apply function
        x = __standard_round(+(parts[0] + "e" + (+parts[1] + n)));

        // convert to e notation
        parts = (x + "e").split("e");

        // unshift
        return +(parts[0] + "e" + (+parts[1] - n));
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["x", PanType.numberType()],
      ["n", PanType.numberType()],
    ];

    return node;
  }

  protected static getTruncateNPlacesDefinitionNode(): ASTNode {
    // round to n decimal places
    // needed because floating-point arithmetics
    // is complicated due to rounding errors
    // i.e., round(1.005, 2) -> 1.01
    //       round(1.3549999999999998, 2) -> 1.35
    const node = new ASTNode();

    node.name = "__standard_truncate_n_places";
    node.code = `
      function ${node.name}(x, n) {
        // source: MDN
        // convert to e notation
        let parts = (x + "e").split("e");

        // shift and apply function
        x = Math.trunc(+(parts[0] + "e" + (+parts[1] + n)));

        // convert to e notation
        parts = (x + "e").split("e");

        // unshift
        return +(parts[0] + "e" + (+parts[1] - n));
      }
    `;
    node.type = PanType.numberType();
    node.argList = [
      ["x", PanType.numberType()],
      ["n", PanType.numberType()],
    ];

    return node;
  }
}
