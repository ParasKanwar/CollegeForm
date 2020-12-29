import React from "react";
export interface theme {
  dark_mode: boolean;
  toggle_mode: () => void;
}
export default React.createContext<theme>({
  dark_mode: false,
  toggle_mode: () => {},
});
