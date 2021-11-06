import React from "react";
import { Tree } from "antd";

export interface IFileExplorerProps {
  onSelect: (selectedKeys: string[]) => void;
  onExpand: (expandedKeys: string[]) => void;
  selectedFileName: string;
  expandedFolders: string[];
  yourFilesFolderName: string;
  mainFileName: string;
  examplesFolderName: string;
  basicsFolderName: string;
  variablesFileName: string;
  typesFileName: string;
  constantsFileName: string;
  textInterpolationFileName: string;
  standardFunctionsFolderName: string;
  consoleFunctionsFileName: string;
  textFunctionsFileName: string;
  mathFunctionsFileName: string;
  expressionsFolderName: string;
  expressionsFileName: string;
  conditionalsFolderName: string;
  ifFileName: string;
  elseFileName: string;
  elseIfFileName: string;
  loopsFolderName: string;
  loopsFileName: string;
  breakContinueFileName: string;
  userFunctionsFolderName: string;
  functionsFileName: string;
  recursionFileName: string;
}

export class FileExplorer extends React.Component<IFileExplorerProps> {
  constructor(props: IFileExplorerProps) {
    super(props);
  }

  render = (): JSX.Element => {
    return (
      <>
        <Tree.DirectoryTree
          onSelect={(files) => this.props.onSelect(files.map((key) => key.toString()))}
          onExpand={(folders) => this.props.onExpand(folders.map((key) => key.toString()))}
          defaultExpandedKeys={this.props.expandedFolders}
          defaultSelectedKeys={[this.props.selectedFileName]}
          // TODO: do not hardcode the entries
          treeData={[
            {
              title: this.props.yourFilesFolderName,
              key: "your_files_directory",
              selectable: false,
              children: [
                {
                  title: this.props.mainFileName,
                  key: "main",
                  isLeaf: true,
                },
              ],
            },
            {
              title: this.props.examplesFolderName,
              key: "examples_directory",
              selectable: false,
              children: [
                {
                  title: this.props.basicsFolderName,
                  key: "variables_directory",
                  selectable: false,
                  children: [
                    {
                      title: this.props.variablesFileName,
                      key: "variables",
                      isLeaf: true,
                    },
                    {
                      title: this.props.typesFileName,
                      key: "types",
                      isLeaf: true,
                    },
                    {
                      title: this.props.constantsFileName,
                      key: "constants",
                      isLeaf: true,
                    },
                    {
                      title: this.props.textInterpolationFileName,
                      key: "text_interpolation",
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: this.props.standardFunctionsFolderName,
                  key: "standard_functions_directory",
                  selectable: false,
                  children: [
                    {
                      title: this.props.consoleFunctionsFileName,
                      key: "console_functions",
                      isLeaf: true,
                    },
                    {
                      title: this.props.textFunctionsFileName,
                      key: "text_functions",
                      isLeaf: true,
                    },
                    {
                      title: this.props.mathFunctionsFileName,
                      key: "math_functions",
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: this.props.expressionsFolderName,
                  key: "expressions_directory",
                  selectable: false,
                  children: [
                    {
                      title: this.props.expressionsFileName,
                      key: "expressions",
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: this.props.conditionalsFolderName,
                  key: "conditionals_directory",
                  selectable: false,
                  children: [
                    {
                      title: this.props.ifFileName,
                      key: "if",
                      isLeaf: true,
                    },
                    {
                      title: this.props.elseFileName,
                      key: "else",
                      isLeaf: true,
                    },
                    {
                      title: this.props.elseIfFileName,
                      key: "else_if",
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: this.props.loopsFolderName,
                  key: "loops_directory",
                  selectable: false,
                  children: [
                    {
                      title: this.props.loopsFileName,
                      key: "loops",
                      isLeaf: true,
                    },
                    {
                      title: this.props.breakContinueFileName,
                      key: "break_continue",
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: this.props.userFunctionsFolderName,
                  key: "user_functions_directory",
                  selectable: false,
                  children: [
                    {
                      title: this.props.functionsFileName,
                      key: "functions",
                      isLeaf: true,
                    },
                    {
                      title: this.props.recursionFileName,
                      key: "recursion",
                      isLeaf: true,
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </>
    );
  };
}
