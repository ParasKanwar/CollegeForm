import Base from "../components/base/layout";
import { useContext, useState } from "react";
import Theme from "../context/theme/theme";
import Login from "../components/login";
export default function Home() {
  const context = useContext(Theme);
  return (
    <Base themeColor={context.dark_mode ? "#013243" : "#19b5fe"} title="Home">
      <Login></Login>
      <button
        onClick={() => {
          context.toggle_mode();
        }}
      >
        DarkMode
      </button>
    </Base>
  );
}
