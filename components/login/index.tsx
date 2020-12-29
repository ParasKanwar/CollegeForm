import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import Theme from "../../context/theme/theme";
import BaseContainer from "./baseContainer";
export default () => {
  const context = useContext(Theme);
  return (
    <motion.div drag dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}>
      <BaseContainer>
        <input></input>
        <input></input>
        <button>Sign_In</button>
        <button>Sign_Up</button>
      </BaseContainer>
    </motion.div>
  );
};
