import React, { useReducer } from "react";
import BaseContainer from "./baseContainer";
import Overlay from "../overlay/index";
import ButtonGroup from "./components/buttonGroup";
import InputGroup from "./components/inputGroup";
import Progress from "../progress/index";
import { Button } from "./interfaces/button";
import { input } from "./interfaces/input";
const actions = { email: "Email", password: "Password" };
export default () => {
  const [state, dispatch] = useReducer(MyReducer, { email: "", password: "" });
  return (
    <>
      <Overlay visible={state.password === "paras"}>
        <img
          style={{ width: 100, height: 100, marginBottom: 20 }}
          src="/icon-384x384.png"
        ></img>
        <Progress></Progress>
      </Overlay>
      <BaseContainer>
        <img style={{ width: 100, height: 100 }} src="/icon-384x384.png"></img>
        <InputGroup inputs={getInputs(dispatch, state)}></InputGroup>
        <ButtonGroup buttons={getButtons()}></ButtonGroup>
      </BaseContainer>
    </>
  );
};
function MyReducer(state, action) {
  switch (action.type) {
    case "Email":
      return { ...state, email: action.email };
    case "Password":
      return { ...state, password: action.password };
    default:
      return state;
  }
}

function getInputs(
  dispatch: (any) => void,
  state: { email: string; password: string }
): input[] {
  const emailProps: input = {
    name: actions.email,
    onChange(text: string) {
      console.log(state.email);
      dispatch({ type: actions.email, email: text });
    },
    placeholder: actions.email,
    type: "email",
    value: state.email,
  };
  const passwordProps: input = {
    name: actions.password,
    onChange(text: string) {
      console.log(state.password);
      dispatch({ type: actions.password, password: text });
    },
    placeholder: actions.password,
    type: "password",
    value: state.password,
  };
  return [emailProps, passwordProps];
}

function getButtons(): Button[] {
  const loginButtonProps: Button = {
    onClick: () => {
      console.log("Hello Sign In Has Been Clicked");
    },
    text: "SignIn",
  };
  const signUpButtonProps: Button = {
    onClick() {
      console.log("Sign Up Has Been Clicked");
    },
    text: "SignUp",
  };

  return [loginButtonProps, signUpButtonProps];
}
