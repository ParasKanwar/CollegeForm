import { Button } from "../../interfaces/button";
import LoginScreenButton from "./button";
export default ({ buttons }: { buttons: Button[] }) => {
  return (
    <>
      {buttons.map(({ onClick, text }) => {
        return (
          <LoginScreenButton
            key={text}
            onClick={onClick}
            text={text}
          ></LoginScreenButton>
        );
      })}
    </>
  );
};
