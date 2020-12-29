import ThemeContext from "../context/theme/theme";
import ThemeReducer, { TOGGLE } from "../context/theme/reducer";
import React, { useContext, useReducer, useState } from "react";
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
    </ThemeContext.Provider>
  );
}

export default MyApp;
