import React, { useEffect } from "react";
import style from "./overlay.module.css";
export default ({
  visible,
  children,
  onClose,
}: React.PropsWithChildren<{ visible: boolean; onClose: () => void }>) => {
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
      <div className={visible ? style.overlay : style.noOverlay}>
        {children}
      </div>
    </>
  );
};
