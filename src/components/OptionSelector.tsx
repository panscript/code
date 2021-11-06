import React from "react";
import { Select } from "antd";

export interface IOption {
  iconURL?: string;
  label: string;
}

export interface IOptions {
  [value: string]: IOption;
}

export interface IOptionSelectorProps {
  label: JSX.Element;
  options: IOptions;
  selectedOption: string;
  style?: React.CSSProperties;
  onChange: (newValue: string) => void;
}

export class OptionSelector extends React.Component<IOptionSelectorProps> {
  constructor(props: IOptionSelectorProps) {
    super(props);
  }

  render = (): JSX.Element => {
    return (
      <>
        <Select
          optionLabelProp="label"
          value={this.props.selectedOption}
          onChange={this.props.onChange}
          style={this.props.style}
        >
          {Object.keys(this.props.options).map((option) => {
            const optionLabel = (
              <>
                {this.props.options[option].iconURL && (
                  <img
                    width="20px"
                    src={this.props.options[option].iconURL}
                    alt={this.props.options[option].label}
                    style={{ verticalAlign: "-0.125em" }}
                  />
                )}
                {this.props.options[option].iconURL ? " " : ""}
                {this.props.options[option].label}
              </>
            );

            return (
              <Select.Option
                key={option}
                value={option}
                label={
                  <>
                    {this.props.label} {optionLabel}
                  </>
                }
              >
                {optionLabel}
              </Select.Option>
            );
          })}
        </Select>
      </>
    );
  };
}
