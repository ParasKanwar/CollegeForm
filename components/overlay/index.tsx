import React from "react";
import style from "./overlay.module.css";
export default ({
  visible,
  children,
}: React.PropsWithChildren<{ visible: boolean }>) => {
  return (
    <>
      <div className={visible ? style.overlay : style.noOverlay}>
        {children}
      </div>
    </>
  );
};
