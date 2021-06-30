import React from 'react';
import { Component, MouseEvent } from 'react';
import { ThemeContext } from './theme-context';

interface IProps {
  onClick (event: MouseEvent<HTMLButtonElement>): void,
}

class ThemedButton extends Component<IProps, any> {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        onClick={props.onClick}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
