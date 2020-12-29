import Base from "../components/base/layout";
import { useContext, useState } from "react";
import Theme from "../context/theme/theme";
export default function Home() {
  const context = useContext(Theme);
  const [isDark, setDark] = useState(false);
  return (
    <Base themeColor={isDark ? "#013243" : "#19b5fe"} title="Home">
      <button onClick={context.toggle_mode}>Hello World</button>
      <button
        onClick={() => {
          setDark(!isDark);
        }}
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </Base>
  );
}
