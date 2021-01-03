import ThemeContext from "../context/theme/theme";
import ThemeReducer, { TOGGLE } from "../context/theme/reducer";
import React, { useReducer } from "react";
import "../globals/golbal.css";
function MyApp({ Component, pageProps }) {
  const [theme, dispatch] = useReducer(ThemeReducer, { dark_mode: false });
  const toggle_mode = () => {
    dispatch({ type: TOGGLE });
  };
  return (
    <ThemeContext.Provider
      value={{
        dark_mode: theme.dark_mode,
        toggle_mode,
      }}
    >
      <Component {...pageProps} />
      <style global jsx>
        {`
          body {
            transition: 0.25s background;
            background: ${theme.dark_mode ? "black" : "white"};
          }
        `}
      </style>
    </ThemeContext.Provider>
  );
}

export default MyApp;
