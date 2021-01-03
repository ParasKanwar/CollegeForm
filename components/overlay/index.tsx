import React, { useContext, useEffect } from "react";
import style from "./overlay.module.css";
import ThemeContext from "../../context/theme/theme";
export default ({
  visible,
  children,
  onClose,
}: React.PropsWithChildren<{ visible: boolean; onClose: () => void }>) => {
  const { dark_mode } = useContext(ThemeContext);
  useEffect(() => {
    window.onkeydown = (event) => {
      event = event || window.event;
      if (event.key === "Escape") {
        onClose();
      }
    };
    return () => {
      window.onkeypress = undefined;
    };
  }, []);

  return (
    <>
      <div
        className={visible ? style.overlay : style.noOverlay}
        style={{ backgroundColor: dark_mode ? "black" : "white" }}
      >
        {children}
      </div>
    </>
  );
};
