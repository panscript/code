import { ASTNode } from "./CommonASTNode";

export class SymbolTableScope {
  private name = "";
  private symbols: ASTNode[];

  constructor(name?: string) {
    this.symbols = [];

    if (name) {
      this.name = name;
    }
  }

  getName = (): string => {
    return this.name;
  };

  getNode = (i: number): ASTNode => {
    return this.symbols[i];
  };

  getAllNodes = (): ASTNode[] => {
    return this.symbols;
  };

  pushNode = (node: ASTNode): void => {
    this.symbols.push(node);
  };

  length = (): number => {
    return this.symbols.length;
  };
}

export class SymbolTable {
  // symbol table is a list of scopes
  // it starts with the empty global scope
  private symbolTable = [new SymbolTableScope("$global")];

  scopeLevel = (): number => {
    return this.symbolTable.length - 1;
  };

  pushNode = (node: ASTNode): void => {
    const topScope = this.symbolTable[this.symbolTable.length - 1];
    topScope.pushNode(node);
  };

  pushGlobalNode = (node: ASTNode): void => {
    const globalScope = this.symbolTable[0];
    globalScope.pushNode(node);
  };

  pushScope = (name?: string): void => {
    // if new unnamed scope, keep the same name from the current scope
    if (!name) {
      const currentScopeNumber = this.symbolTable.length - 1;
      const currentScope = this.symbolTable[currentScopeNumber];
      name = currentScope.getName();
    }

    this.symbolTable.push(new SymbolTableScope(name));
  };

  popScope = (): void => {
    // do not pop the global scope
    if (this.symbolTable.length == 1) {
      return;
    }

    this.symbolTable.pop();
  };

  getCode = (): string => {
    let code = "";

    for (const scope of this.symbolTable) {
      for (const node of scope.getAllNodes()) {
        code += node.code;
      }
    }

    return code;
  };

  findCurrentFunction = (): ASTNode | undefined => {
    // we must NOT be in the global scope
    const currentScopeTop = this.symbolTable.length - 1;
    const scope = this.symbolTable[currentScopeTop];
    if (scope.getName() == "$global") {
      return;
    }

    // return the last item in the global scope
    const globalScope = this.symbolTable[0];
    return globalScope.getNode(globalScope.length() - 1);
  };

  findByNameInCurrentScope = (name: string): ASTNode | undefined => {
    const currentScope = this.symbolTable.length - 1;
    return this.findByNameInScope(name, currentScope);
  };

  findByNameInGlobalScope = (name: string): ASTNode | undefined => {
    return this.findByNameInScope(name, 0);
  };

  findByNameInAnyScope = (name: string): ASTNode | undefined => {
    const currentScope = this.symbolTable.length - 1;
    for (let i = currentScope; i >= 0; --i) {
      const node = this.findByNameInScope(name, i);
      if (node) {
        return node;
      }
    }
  };

  protected findByNameInScope = (name: string, scopeTop: number): ASTNode | undefined => {
    let scope = this.symbolTable[scopeTop];
    const scopeName = scope.getName();

    for (let i = scopeTop; i >= 0 && scope.getName() == scopeName; --i) {
      scope = this.symbolTable[i];
      for (const node of scope.getAllNodes()) {
        if (node.name == name) {
          return node;
        }
      }
    }
  };
}
