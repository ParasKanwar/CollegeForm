import Base from "../components/base/layout";
import { useContext, useState } from "react";
import Theme from "../context/theme/theme";
import Login from "../components/login";
export default function Home() {
  const context = useContext(Theme);
  return (
    <Base
      themeColor={context.dark_mode ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)"}
      title="Home"
    >
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
