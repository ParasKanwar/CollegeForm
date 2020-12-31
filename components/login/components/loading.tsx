import React from "react";
import Overlay from "../../overlay/index";
import Progress from "../../progress/index";
const loading = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <Overlay onClose={onClose} visible={visible}>
      <img
        style={{ width: 100, height: 100, marginBottom: 20 }}
        src="/icon-384x384.png"
      ></img>
      <Progress></Progress>
    </Overlay>
  );
};

export default loading;
