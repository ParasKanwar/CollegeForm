import dynamic from "next/dynamic";
import React, { useContext } from "react";
import Theme from "../../context/theme/theme";
const Frame = dynamic(async () => (await import("framer")).Frame);
export default () => {
  const context = useContext(Theme);
  return (
    <Frame
      color={"black"}
      initial={{ scale: 0.1 }}
      animate={{
        scale: 1,
        animationDelay: "1s",
        background: context.dark_mode ? "#ffffff" : "#212121",
      }}
      borderRadius="10px"
      width="330px"
      height="400px"
      shadow="0px 0px 10px 10px rgba(0,0,0,0.1)"
      dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
      dragMomentum={true}
      drag={true}
      transition={{ type: "spring", duration: 0.5 }}
      center
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <img src="/icon-512x512.png" width="60px" height="60px"></img>
        </div>
      </div>
    </Frame>
  );
};
