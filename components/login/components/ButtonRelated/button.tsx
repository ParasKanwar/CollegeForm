import React, { useContext } from "react";
import ThemeContext from "../../../../context/theme/theme";
import Style from "./buttonRelated.module.css";
const LoginScreenButton = ({ text, onClick, disabled = false }) => {
  const context = useContext(ThemeContext);
  return (
    <button
      className={Style.LoginScreenButton}
      disabled={disabled}
      style={{
        background: context.dark_mode ? "black" : "white",
        color: context.dark_mode ? "grey" : "black",
        border: "0.5px solid rgba(0,0,0,0.1)",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LoginScreenButton;
