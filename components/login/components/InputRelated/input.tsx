import React, { useContext } from "react";
import { input } from "../../interfaces/input";
import style from "./inputRelated.module.css";
import ThemeContext from "../../../../context/theme/theme";
const LoginScreenInput = (props: input) => {
  const { dark_mode } = useContext(ThemeContext);
  return (
    <input
      style={{
        color: dark_mode ? "white" : "black",
        border: `1px solid ${
          dark_mode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"
        }`,
      }}
      className={style.LoginInput}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      type={props.type || "text"}
    ></input>
  );
};

export default LoginScreenInput;
