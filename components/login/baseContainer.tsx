import { PropsWithChildren, useContext } from "react";
import theme from "../../context/theme/theme";
import styles from "./baseContainer.module.css";
export default (props: PropsWithChildren<{}>) => {
  const context = useContext(theme);
  return (
    <div
      style={{
        background: context.dark_mode ? "#212121" : "rgba(255,255,255,1)",
      }}
      className={styles.baseContainer}
    >
      {props.children}
    </div>
  );
};
