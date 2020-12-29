import React, { useState } from "react";
import BaseContainer from "./baseContainer";
import ButtonGroup from "./components/buttonGroup";
import InputGroup from "./components/inputGroup";
import { inputHandlers } from "./handlers/input";
import { buttonHandlers } from "./handlers/button";
export default () => {
  return (
    <BaseContainer>
      <img style={{ width: 100, height: 100 }} src="/icon-384x384.png"></img>
      <InputGroup inputs={inputHandlers}></InputGroup>
      <ButtonGroup buttons={buttonHandlers}></ButtonGroup>
    </BaseContainer>
  );
};
