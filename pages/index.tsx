import Base from "../components/base/layout";
import { useReducer, useContext } from "react";
import Theme from "../context/theme/theme";
export default function Home() {
  const context = useContext(Theme);
  return (
    <Base title="Home">
      <button onClick={context.toggle_mode}>Hello World</button>
    </Base>
  );
}
