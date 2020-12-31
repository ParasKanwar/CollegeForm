import React, { useReducer } from "react";
import BaseContainer from "./baseContainer";
import ButtonGroup from "./components/ButtonRelated/buttonGroup";
import MyReducer from "./reducer/index";
import InputGroup from "./components/InputRelated/inputGroup";
import { Button } from "./interfaces/button";
import { input } from "./interfaces/input";
import Loading from "./components/loading";
import Logo from "./components/Logo";
const actions = { email: "Email", password: "Password" };
export default () => {
  const [state, dispatch] = useReducer(MyReducer, {
    email: "",
    password: "",
    initial: true,
    loading: false,
  });
  return (
    <>
      {!state.initial ? (
        <Loading
          onClose={() => {
            dispatch({ type: "reset" });
          }}
          visible={state.loading}
        ></Loading>
      ) : (
        ""
      )}
      <BaseContainer>
        <Logo></Logo>
        <InputGroup inputs={getInputs(dispatch, state)}></InputGroup>
        <ButtonGroup buttons={getButtons(dispatch)}></ButtonGroup>
      </BaseContainer>
    </>
  );
};

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

function getButtons(dispatch): Button[] {
  const loginButtonProps: Button = {
    onClick: () => {
      return dispatch({ type: "login" });
    },
    text: "SignIn",
  };
  const signUpButtonProps: Button = {
    onClick() {
      return dispatch({ type: "signup" });
    },
    text: "SignUp",
  };

  return [loginButtonProps, signUpButtonProps];
}
