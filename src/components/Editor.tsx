import React from "react";
import { Helmet } from "react-helmet";
import codemirror from "codemirror";
import { UnControlled as ReactCodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";

export interface IEditorProps {
  language: string;
  editorContent: string;
  themeName: string;
  onEditorConfigured: (editor: CodeMirror.Editor | undefined) => void;
  onEditorContentChange: (newValue: string) => void;
}

export interface IEditorState {
  loadedModes: string[];
}

export class Editor extends React.Component<IEditorProps, IEditorState> {
  editorInstance: CodeMirror.Editor | undefined;

  constructor(props: IEditorProps) {
    super(props);

    this.state = {
      loadedModes: [],
    };
  }

  componentDidUpdate = async (prevProps: IEditorProps): Promise<void> => {
    // language changed?
    if (prevProps.language !== this.props.language) {
      await this.loadEditorMode(this.props.language);
    }
  };

  handleEditorDidMount = async (editor: CodeMirror.Editor, callback: () => void): Promise<void> => {
    // store editor instance
    this.editorInstance = editor;

    // dynamically load editor mode
    await this.loadEditorMode(this.props.language);

    callback();
  };

  loadEditorMode = async (language: string): Promise<void> => {
    // define mode, if not yet defined
    if (!this.state.loadedModes.includes(language)) {
      // define and set new editor mode
      const modeFactory = (await import(`../languages/${language}/CustomEditorMode`)).ModeFactory;
      codemirror.defineMode(language, modeFactory);
      this.editorInstance?.setOption("mode", language);

      this.setState({
        loadedModes: this.state.loadedModes.concat(language),
      });
    }
  };

  render = (): JSX.Element => {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" href={`./themes/${this.props.themeName}.css`} />
        </Helmet>
        <ReactCodeMirror
          value={this.props.editorContent}
          detach={true}
          options={{
            mode: this.props.language,
            theme: this.props.themeName,
            lineNumbers: true,
            lineWrapping: true,
            indentWithTabs: true,
            extraKeys: {
              Esc: () => {
                const firstFocusableElement = document.querySelector(
                  "input:enabled," +
                    "select:enabled," +
                    "textarea:enabled," +
                    "button:enabled," +
                    "a[href]:enabled",
                ) as HTMLElement;
                firstFocusableElement.focus();
              },
            },
          }}
          editorDidConfigure={() => this.props.onEditorConfigured(this.editorInstance)}
          onChange={(editor, data, value) => this.props.onEditorContentChange(value)}
          editorDidMount={(editor, value, callback) => this.handleEditorDidMount(editor, callback)}
        />
      </>
    );
  };
}
