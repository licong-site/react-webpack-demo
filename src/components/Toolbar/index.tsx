import React from "react";
import { FunctionComponent, MouseEvent } from "react";
import ThemedButton from "./ThemedButton";

interface IProps {
  changeTheme (event: MouseEvent<HTMLElement>): void,
}

const Toolbar: FunctionComponent<IProps> = ({ changeTheme }) => {
  return (
    <ThemedButton onClick={changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export default Toolbar;
