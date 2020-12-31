import React from "react";
import { input } from "../../interfaces/input";
const LoginScreenInput = (props: input) => {
  return (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      type={props.type || "text"}
    ></input>
  );
};

export default LoginScreenInput;
