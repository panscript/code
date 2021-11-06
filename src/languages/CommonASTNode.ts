export class ASTNode {
  public code = "";
  public name = "";
  public type = new PanType();
  public argList: [string, PanType][] = [];
}

export const enum PanTypePart {
  // update PanType.toString when adding/removing entries
  None = "none",
  Logical = "logical",
  Number = "number",
  Text = "text",
  VariadicZeroOrMore = "...T",
  Any = "any",
}

export class PanType {
  // TODO: this representation does NOT work if we have objects, tuples, etc.
  public type: PanTypePart[] = [];
  public isConst = false;

  constructor(type?: PanTypePart[], isConst?: boolean) {
    if (type !== undefined) {
      this.type = type;
    }

    if (isConst !== undefined) {
      this.isConst = isConst;
    }
  }

  static logicalType = (): PanType => {
    return new PanType([PanTypePart.Logical]);
  };

  static numberType = (): PanType => {
    return new PanType([PanTypePart.Number]);
  };

  static textType = (): PanType => {
    return new PanType([PanTypePart.Text]);
  };

  equalsExpected = (expected: PanType): boolean => {
    for (let i = 0; i < this.type.length; ++i) {
      // stop comparing if expected is "any"
      if (expected.type[i] == PanTypePart.Any) {
        return true;
      }

      if (this.type[i] !== expected.type[i]) {
        return false;
      }
    }

    return true;
  };

  toString = (): string => {
    if (this.type.length == 0) {
      return PanTypePart.None.toString();
    }

    let str = "";

    for (let i = 0; i < this.type.length; ++i) {
      // open parenthesis for complex types
      if (i > 0) {
        str += "(";
      }

      str += this.type[i].toString();
    }

    // close all parentheses
    if (this.type.length > 1) {
      str += ")".repeat(this.type.length - 1);
    }

    return str;
  };
}
