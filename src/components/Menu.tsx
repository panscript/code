import React from "react";
import { OptionSelector, IOptions } from "./OptionSelector";
import { Button, Space, Upload } from "antd";
import {
  CloudUploadOutlined,
  StopOutlined,
  DownloadOutlined,
  FormatPainterOutlined,
  GlobalOutlined,
  PlayCircleOutlined,
  RedoOutlined,
  ReloadOutlined,
  UndoOutlined,
} from "@ant-design/icons";

export type { IOptions } from "./OptionSelector";

export interface IMenuProps {
  languageSelectorLabel: string;
  languageOptions: IOptions;
  selectedLanguage: string;
  onLanguageChange: (newValue: string) => void;
  themeSelectorLabel: string;
  themeOptions: IOptions;
  selectedTheme: string;
  onThemeChange: (newValue: string) => void;
  onRunButtonClick: () => void;
  onUndoButtonClick: () => void;
  onRedoButtonClick: () => void;
  onReloadButtonClick: () => void;
  onSaveButtonClick: () => void;
  onClearButtonClick: () => void;
  onLoadButtonChange: (file: File) => void;
  runButtonText: string;
  undoButtonText: string;
  redoButtonText: string;
  reloadButtonText: string;
  saveButtonText: string;
  loadButtonText: string;
  clearButtonText: string;
  undoDisabled: boolean;
  redoDisabled: boolean;
}

export class Menu extends React.Component<IMenuProps> {
  constructor(props: IMenuProps) {
    super(props);
  }

  render = (): JSX.Element => {
    return (
      <>
        <div id="language_menu">
          <OptionSelector
            label={
              <>
                <GlobalOutlined /> {this.props.languageSelectorLabel}
              </>
            }
            selectedOption={this.props.selectedLanguage}
            options={this.props.languageOptions}
            onChange={this.props.onLanguageChange}
            style={{ width: "100%" }}
          />
        </div>
        <div id="control_menu">
          <Space size={5} style={{ marginRight: "5px" }}>
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              onClick={this.props.onRunButtonClick}
            >
              {this.props.runButtonText}
            </Button>
            <Button
              icon={<UndoOutlined />}
              disabled={this.props.undoDisabled}
              onClick={this.props.onUndoButtonClick}
            >
              {this.props.undoButtonText}
            </Button>
            <Button
              icon={<RedoOutlined />}
              disabled={this.props.redoDisabled}
              onClick={this.props.onRedoButtonClick}
            >
              {this.props.redoButtonText}
            </Button>
            <Button icon={<ReloadOutlined />} onClick={this.props.onReloadButtonClick}>
              {this.props.reloadButtonText}
            </Button>
            <Button icon={<DownloadOutlined />} onClick={this.props.onSaveButtonClick}>
              {this.props.saveButtonText}
            </Button>
            <Upload
              accept=".pan"
              showUploadList={false}
              customRequest={(e) => this.props.onLoadButtonChange(e.file as File)}
            >
              <Button icon={<CloudUploadOutlined />}>{this.props.loadButtonText}</Button>
            </Upload>
            <OptionSelector
              label={
                <>
                  <FormatPainterOutlined /> {this.props.themeSelectorLabel}
                </>
              }
              selectedOption={this.props.selectedTheme}
              options={this.props.themeOptions}
              onChange={this.props.onThemeChange}
            />
          </Space>
          <Button
            danger
            type="primary"
            icon={<StopOutlined />}
            onClick={this.props.onClearButtonClick}
            style={{ marginLeft: "auto", marginRight: "10px" }}
          >
            {this.props.clearButtonText}
          </Button>
        </div>
      </>
    );
  };
}
