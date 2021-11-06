import { CommonVisitor } from "../common/CommonVisitor";
import { CustomStandardLibrary } from "./CustomStandardLibrary";

export class CustomVisitor extends CommonVisitor {
  constructor() {
    super();
    this.symbolTable = CustomStandardLibrary.getStandardLibrarySymbolTable();
  }
}
