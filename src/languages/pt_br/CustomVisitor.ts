import { CommonVisitor } from "../common/CommonVisitor";
import { CustomLocalizedStrings } from "./CustomLocalizedStrings";
import { CustomStandardLibrary } from "./CustomStandardLibrary";

export class CustomVisitor extends CommonVisitor {
  constructor() {
    super();
    this.symbolTable = CustomStandardLibrary.getStandardLibrarySymbolTable();
    this.localizedStrings = new CustomLocalizedStrings();
  }
}
