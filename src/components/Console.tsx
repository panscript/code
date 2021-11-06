import React from "react";
import { Terminal, ITerminalOptions } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { Unicode11Addon } from "xterm-addon-unicode11";
import { WebglAddon } from "xterm-addon-webgl";
import "xterm/css/xterm.css";
import "./Console.css";

export interface IConsoleProps {
  term?: Terminal;
  options?: ITerminalOptions;

  // based on xterm.d.ts
  onBinary?: (data: string) => void;
  onCursorMove?: () => void;
  onData?: (data: string) => void;
  onKey?: (data: { key: string; domEvent: KeyboardEvent }) => void;
  onLineFeed?: () => void;
  onScroll?: (event: number) => void;
  onSelectionChange?: () => void;
  onRender?: (event: { start: number; end: number }) => void;
  onResize?: (event: { cols: number; rows: number }) => void;
  onTitleChange?: (title: string) => void;
  customKeyEventHandler?: (event: KeyboardEvent) => boolean;
}

export class Console extends React.Component<IConsoleProps> {
  private term: Terminal;
  private containerDivRef: React.RefObject<HTMLDivElement>;

  constructor(props: IConsoleProps) {
    super(props);

    this.term = props.term ?? new Terminal(props.options);
    this.containerDivRef = React.createRef();

    if (this.props.onBinary) {
      this.term.onBinary(this.props.onBinary);
    }

    if (this.props.onCursorMove) {
      this.term.onCursorMove(this.props.onCursorMove);
    }

    if (this.props.onData) {
      this.term.onData(this.props.onData);
    }

    if (this.props.onKey) {
      this.term.onKey(this.props.onKey);
    }

    if (this.props.onLineFeed) {
      this.term.onLineFeed(this.props.onLineFeed);
    }

    if (this.props.onScroll) {
      this.term.onScroll(this.props.onScroll);
    }

    if (this.props.onSelectionChange) {
      this.term.onSelectionChange(this.props.onSelectionChange);
    }

    if (this.props.onRender) {
      this.term.onRender(this.props.onRender);
    }

    if (this.props.onResize) {
      this.term.onResize(this.props.onResize);
    }

    if (this.props.onTitleChange) {
      this.term.onTitleChange(this.props.onTitleChange);
    }

    if (this.props.customKeyEventHandler) {
      this.term.attachCustomKeyEventHandler(this.props.customKeyEventHandler);
    }
  }

  componentDidMount = (): void => {
    const fitAddon = new FitAddon();
    this.term.loadAddon(fitAddon);

    if (this.containerDivRef.current) {
      this.term.open(this.containerDivRef.current);
    }

    const webGLAddon = new WebglAddon();
    this.term.loadAddon(webGLAddon);

    const unicode11Addon = new Unicode11Addon();
    this.term.loadAddon(unicode11Addon);
    this.term.unicode.activeVersion = "11";

    fitAddon.fit();
    window.onresize = (): void => {
      fitAddon.fit();
    };
  };

  componentWillUnmount = (): void => {
    this.term.dispose();
  };

  render = (): JSX.Element => {
    return <div id="output" ref={this.containerDivRef}></div>;
  };
}
