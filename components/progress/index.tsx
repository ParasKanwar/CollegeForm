import style from "./progress.module.css";
import ThemeContext from "../../context/theme/theme";
import { useContext } from "react";
export default () => {
  const { dark_mode } = useContext(ThemeContext);
  return (
    <svg height="100" width="100" className={style.spin}>
      <circle
        cx="50"
        cy="50"
        r="40"
        fill={dark_mode ? "black" : "white"}
        stroke={dark_mode ? "white" : "black"}
        strokeWidth="3"
        strokeDasharray="142"
      />
    </svg>
  );
};
