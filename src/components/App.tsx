import React from "react";
import { TranspilerFactory, ITranspiler } from "../languages/Transpiler";
import { Menu, IOptions } from "./Menu";
import ThemeOptions from "../ThemeOptions";
import { LanguageOptions } from "../languages/LanguageOptions";
import { FileExplorer } from "./FileExplorer";
import { Editor } from "./Editor";
import { Console } from "./Console";
import { saveAs } from "file-saver";
import { Terminal } from "xterm";
import { CommonLocalizedStrings } from "../languages/common/CommonLocalizedStrings";
import { Typography } from "antd";
import "antd/dist/antd.css";
import CodeMirror from "codemirror";
import { ParseCancellationException } from "antlr4ts/misc/ParseCancellationException";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

// add xterm as a window property
// this is needed for the print() function in the standard library
declare global {
  interface Window {
    xterm: Terminal;
  }
}

export interface IAppProps {
  name: string;
  onPageReady?: () => void;
}

export interface IAppState {
  selectedLanguage: string;
  selectedTheme: string;
  selectedFileName: string;
  expandedFolders: string[];
  fileCache: IFileCache;
}

export interface IFileCache {
  [fileName: string]: string;
}

export interface IEditorCache {
  [fileName: string]: CodeMirror.Doc;
}

export class App extends React.Component<IAppProps, IAppState> {
  localStorageKey = this.props.name + "Cache";
  themeSelectorOptions: IOptions = {};
  languageSelectorOptions: IOptions = {};
  editorContentChangeTimer: NodeJS.Timeout | undefined;
  editorStateCache: IEditorCache = {};
  transpiler: ITranspiler | undefined;
  editor: CodeMirror.Editor | undefined;
  xterm: Terminal;
  localizedStrings: CommonLocalizedStrings | undefined;

  constructor(props: IAppProps) {
    super(props);

    this.languageSelectorOptions = this.getLanguageSelectorOptions();
    this.themeSelectorOptions = this.getThemeSelectorOptions();

    // setup xterm instance
    // TODO: move this inside the terminal component
    this.xterm = new Terminal({
      altClickMovesCursor: false,
      disableStdin: true,
      rightClickSelectsWord: false,
      screenReaderMode: true,
      tabStopWidth: 4,
      allowTransparency: true,
      theme: {
        background: "#012456", // PowerShell's dark blue
        cursor: "#012456", // same as bg = invisible
      },
    });

    // focus to allow scrolling
    this.xterm.focus();

    // write command prompt
    this.xterm.write("> ");

    // expose xterm as a global so that eval'd code can use it
    window.xterm = this.xterm;

    // set state
    const storedState = localStorage.getItem(this.localStorageKey);
    if (storedState) {
      // load state from browser's localStorage
      this.state = JSON.parse(storedState);
    } else {
      this.state = this.makeDefaultState();
    }
  }

  getLanguageSelectorOptions = (): IOptions => {
    const languageSelectorOptions: IOptions = {};

    // build sorted language options
    const languageOptionKeys = Object.keys(LanguageOptions).slice();
    languageOptionKeys
      .sort((a, b) => LanguageOptions[a].name.localeCompare(LanguageOptions[b].name))
      .map((id) => {
        languageSelectorOptions[id] = {
          iconURL: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${LanguageOptions[id].countryCode}.svg`,
          label: LanguageOptions[id].name,
        };
      });

    return languageSelectorOptions;
  };

  getThemeSelectorOptions = (): IOptions => {
    const themeSelectorOptions: IOptions = {};

    // build sorted theme options
    const themeOptionKeys = ThemeOptions.slice();
    themeOptionKeys.sort().map((id) => {
      themeSelectorOptions[id] = {
        label: id,
      };
    });

    return themeSelectorOptions;
  };

  makeDefaultState = (): IAppState => {
    let defaultLanguage = "en_us";
    if (!(defaultLanguage in this.languageSelectorOptions)) {
      defaultLanguage = Object.keys(this.languageSelectorOptions)[0];
    }

    let defaultTheme = "high-contrast";
    if (!(defaultTheme in this.themeSelectorOptions)) {
      defaultTheme = Object.keys(this.themeSelectorOptions)[0];
    }

    return {
      selectedLanguage: defaultLanguage,
      selectedTheme: defaultTheme,
      selectedFileName: "main", // TODO: localize default file name
      expandedFolders: ["your_files_directory", "examples_directory"],
      fileCache: {},
    };
  };

  fetchLocalizedStrings = async (language: string): Promise<CommonLocalizedStrings> => {
    const localizedStringsFactory = (
      await import(`../languages/${language}/CustomLocalizedStrings.ts`)
    ).CustomLocalizedStrings;
    return new localizedStringsFactory();
  };

  fetchFileContent = async (language: string, fileName: string): Promise<string> => {
    let content = (
      await import(`../languages/${language}/code_samples/${fileName}.${language}.pan`)
    ).default;

    // fix double newlines
    content = content.replace(/\r/g, "");

    return content;
  };

  saveStateToLocalStorage = (): void => {
    const stateString = JSON.stringify(this.state);
    localStorage.setItem(this.localStorageKey, stateString);
  };

  handleEditorConfigured = async (editor: CodeMirror.Editor | undefined): Promise<void> => {
    this.editor = editor;

    // setup current language and file
    const language = this.state.selectedLanguage;
    const fileName = this.state.selectedFileName;
    await this.handleLanguageOptionChange(language);
    await this.handleFileOptionChange([fileName]);

    if (this.props.onPageReady) {
      this.props.onPageReady();
    }
  };

  handleEditorContentChange = (newContent: string): void => {
    // reset editing timeout
    if (this.editorContentChangeTimer) {
      clearTimeout(this.editorContentChangeTimer);
    }
    this.editorContentChangeTimer = setTimeout(this.saveStateToLocalStorage, 500);

    this.setState((prev) => ({
      fileCache: {
        ...prev.fileCache,
        [`${prev.selectedFileName}.${prev.selectedLanguage}.pan`]: newContent,
      },
    }));
  };

  handleThemeOptionChange = (newTheme: string): void => {
    this.editor?.setOption("theme", newTheme);
    this.setState(
      {
        selectedTheme: newTheme,
      },
      this.saveStateToLocalStorage,
    );
  };

  handleLanguageOptionChange = async (newLanguage: string): Promise<void> => {
    if (!this.editor) {
      return;
    }

    // load new transpiler
    this.localizedStrings = await this.fetchLocalizedStrings(newLanguage);
    const factory = new TranspilerFactory(newLanguage, this.localizedStrings);
    this.transpiler = await factory.build();

    const fileName = this.state.selectedFileName;
    await this.handleLanguageOrFileOptionChange(newLanguage, fileName);
  };

  handleFileOptionChange = async (newFileNames: string[]): Promise<void> => {
    if (!this.editor || newFileNames.length == 0) {
      return;
    }

    const language = this.state.selectedLanguage;
    const fileName = this.state.selectedFileName;
    const newFileName = newFileNames[0];

    // do not run if the file did not actually change
    // e.g., when the user reselected the current file
    if (fileName == newFileName) {
      return;
    }

    await this.handleLanguageOrFileOptionChange(language, newFileName);
  };

  handleLanguageOrFileOptionChange = async (
    newLanguage: string,
    newFileName: string,
  ): Promise<void> => {
    if (!this.editor) {
      return;
    }

    const oldLanguage = this.state.selectedLanguage;
    const oldFileName = this.state.selectedFileName;

    // fetch new content from file, if not already cached
    let newContent = this.state.fileCache[`${newFileName}.${newLanguage}.pan`];
    if (newContent === undefined) {
      newContent = await this.fetchFileContent(newLanguage, newFileName);
    }

    // create editor context, if not yet created
    let newEditorState = this.editorStateCache[`${newFileName}.${newLanguage}.pan`];
    if (!newEditorState) {
      newEditorState = new CodeMirror.Doc(newContent, newLanguage);
    }

    // swap editor contexts
    const oldDoc = this.editor.swapDoc(newEditorState);
    this.editorStateCache[`${oldFileName}.${oldLanguage}.pan`] = oldDoc;

    this.setState(
      (prev) => ({
        selectedLanguage: newLanguage,
        selectedFileName: newFileName,
        fileCache: {
          ...prev.fileCache,
          [`${newFileName}.${newLanguage}.pan`]: newContent,
        },
      }),
      () => {
        this.saveStateToLocalStorage();
      },
    );
  };

  handleFolderChange = (folders: string[]): void => {
    this.setState(
      {
        expandedFolders: folders,
      },
      this.saveStateToLocalStorage,
    );
  };

  handleRunCode = async (): Promise<void> => {
    const language = this.state.selectedLanguage;
    const code = this.editor?.getValue() ?? "";

    if (!this.localizedStrings) {
      this.localizedStrings = await this.fetchLocalizedStrings(language);
    }

    if (!this.transpiler) {
      const factory = new TranspilerFactory(language, this.localizedStrings);
      this.transpiler = await factory.build();
    }

    // print feedback in the console
    this.xterm.writeln(this.localizedStrings.RUN_BUTTON_LABEL.toLowerCase());

    try {
      // transpile code to JS and run it
      const jsCode = this.transpiler.getTranspiledCode(code);
      eval(jsCode);
    } catch (e) {
      // report error, if any
      let errorMessage = "";
      if (e instanceof ParseCancellationException) {
        errorMessage = e.getCause().message;
      } else if (e instanceof Error) {
        errorMessage = e.toString();
      }

      this.xterm.writeln(errorMessage);
      console.log(e);
    }

    // print new prompt
    this.xterm.writeln("");
    this.xterm.write("> ");
  };

  handleUndoCodeEdit = (): void => {
    // TODO: do NOT use CodeMirror instance directly
    this.editor?.undo();
  };

  handleRedoCodeEdit = (): void => {
    // TODO: do NOT use CodeMirror instance directly
    this.editor?.redo();
  };

  handleReloadCode = async (): Promise<void> => {
    if (!this.editor) {
      return;
    }

    const language = this.state.selectedLanguage;
    const fileName = this.state.selectedFileName;
    const newContent = await this.fetchFileContent(language, fileName);
    this.editor.setValue(newContent);
  };

  handleSaveCode = async (): Promise<void> => {
    const fileName = this.state.selectedFileName;
    const language = this.state.selectedLanguage;
    const code = this.editor?.getValue() ?? "";

    // offer to download editor content as a .pan file
    saveAs(new File([code], `${fileName}.${language}.pan`, { type: "text/plain;charset=utf-8" }));
  };

  handleLoadCode = async (file: File): Promise<void> => {
    // read file with a callback
    // TODO: replace this with `await file.read()` when more browsers support it
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      // update current file's content with uploaded file
      const content = fileReader.result?.toString() ?? "";
      this.editor?.setValue(content);
    };
    fileReader.readAsText(file);
  };

  handleClearOutput = (): void => {
    // TODO: do NOT use CodeMirror instance directly
    this.xterm.clear();
  };

  render = (): JSX.Element => {
    const language = this.state.selectedLanguage;
    const theme = this.state.selectedTheme;
    const editorHistorySize = this.editor?.historySize();
    const editorContent = this.editor?.getValue() ?? "";

    return (
      <>
        <a
          className="github-fork-ribbon right-top"
          href="https://github.com/panscript/code"
          target="_blank"
          rel="noreferrer"
          data-ribbon="View on GitHub"
          title="View on GitHub"
        >
          View on GitHub
        </a>
        <div id="header">
          <Typography.Title>{this.localizedStrings?.PANSCRIPT_HEADLINE ?? ""}</Typography.Title>
        </div>
        <Menu
          languageSelectorLabel={this.localizedStrings?.LANGUAGE_SELECT_PROMPT ?? ""}
          languageOptions={this.languageSelectorOptions}
          selectedLanguage={language}
          onLanguageChange={this.handleLanguageOptionChange}
          themeSelectorLabel={this.localizedStrings?.THEME_SELECT_PROMPT ?? ""}
          themeOptions={this.themeSelectorOptions}
          selectedTheme={theme}
          onThemeChange={this.handleThemeOptionChange}
          onRunButtonClick={this.handleRunCode}
          onUndoButtonClick={this.handleUndoCodeEdit}
          onRedoButtonClick={this.handleRedoCodeEdit}
          onReloadButtonClick={this.handleReloadCode}
          onSaveButtonClick={this.handleSaveCode}
          onLoadButtonChange={this.handleLoadCode}
          onClearButtonClick={this.handleClearOutput}
          runButtonText={this.localizedStrings?.RUN_BUTTON_LABEL ?? ""}
          undoButtonText={this.localizedStrings?.UNDO_BUTTON_LABEL ?? ""}
          redoButtonText={this.localizedStrings?.REDO_BUTTON_LABEL ?? ""}
          reloadButtonText={this.localizedStrings?.RELOAD_BUTTON_LABEL ?? ""}
          saveButtonText={this.localizedStrings?.SAVE_BUTTON_LABEL ?? ""}
          loadButtonText={this.localizedStrings?.LOAD_BUTTON_LABEL ?? ""}
          clearButtonText={this.localizedStrings?.CLEAR_BUTTON_LABEL ?? ""}
          undoDisabled={editorHistorySize?.undo == 0}
          redoDisabled={editorHistorySize?.redo == 0}
        />
        <div id="explorer-container">
          <FileExplorer
            onSelect={this.handleFileOptionChange}
            onExpand={this.handleFolderChange}
            selectedFileName={this.state.selectedFileName}
            expandedFolders={this.state.expandedFolders}
            yourFilesFolderName={this.localizedStrings?.EXPLORER_FOLDER_YOUR_FILES ?? ""}
            mainFileName={this.localizedStrings?.EXPLORER_FILE_MAIN ?? ""}
            examplesFolderName={this.localizedStrings?.EXPLORER_FOLDER_EXAMPLES ?? ""}
            basicsFolderName={this.localizedStrings?.EXPLORER_FOLDER_BASICS ?? ""}
            variablesFileName={this.localizedStrings?.EXPLORER_FILE_VARIABLES ?? ""}
            typesFileName={this.localizedStrings?.EXPLORER_FILE_TYPES ?? ""}
            constantsFileName={this.localizedStrings?.EXPLORER_FILE_CONSTANTS ?? ""}
            textInterpolationFileName={
              this.localizedStrings?.EXPLORER_FILE_TEXT_INTERPOLATION ?? ""
            }
            standardFunctionsFolderName={
              this.localizedStrings?.EXPLORER_FOLDER_STANDARD_FUNCTIONS ?? ""
            }
            consoleFunctionsFileName={this.localizedStrings?.EXPLORER_FILE_CONSOLE_FUNCTIONS ?? ""}
            textFunctionsFileName={this.localizedStrings?.EXPLORER_FILE_TEXT_FUNCTIONS ?? ""}
            mathFunctionsFileName={this.localizedStrings?.EXPLORER_FILE_MATH_FUNCTIONS ?? ""}
            expressionsFolderName={this.localizedStrings?.EXPLORER_FOLDER_EXPRESSIONS ?? ""}
            expressionsFileName={this.localizedStrings?.EXPLORER_FILE_EXPRESSIONS ?? ""}
            conditionalsFolderName={this.localizedStrings?.EXPLORER_FOLDER_CONDITIONALS ?? ""}
            ifFileName={this.localizedStrings?.EXPLORER_FILE_IF ?? ""}
            elseFileName={this.localizedStrings?.EXPLORER_FILE_ELSE ?? ""}
            elseIfFileName={this.localizedStrings?.EXPLORER_FILE_ELSE_IF ?? ""}
            loopsFolderName={this.localizedStrings?.EXPLORER_FOLDER_LOOPS ?? ""}
            loopsFileName={this.localizedStrings?.EXPLORER_FILE_LOOPS ?? ""}
            breakContinueFileName={this.localizedStrings?.EXPLORER_FILE_BREAK_AND_CONTINUE ?? ""}
            userFunctionsFolderName={this.localizedStrings?.EXPLORER_FOLDER_USER_FUNCTIONS ?? ""}
            functionsFileName={this.localizedStrings?.EXPLORER_FILE_FUNCTIONS ?? ""}
            recursionFileName={this.localizedStrings?.EXPLORER_FILE_RECURSION ?? ""}
          />
        </div>
        <div id="editor-container">
          <div id="editor">
            <Editor
              themeName={theme}
              editorContent={editorContent}
              language={language}
              onEditorConfigured={this.handleEditorConfigured}
              onEditorContentChange={this.handleEditorContentChange}
            />
          </div>
        </div>
        <div id="output-container">
          <Console term={this.xterm} />
        </div>
      </>
    );
  };
}
