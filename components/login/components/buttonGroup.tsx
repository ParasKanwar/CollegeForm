import { Button } from "../interfaces/button";
export default ({ buttons }: { buttons: Button[] }) => {
  return (
    <>
      {buttons.map(({ onClick, text }) => {
        return (
          <button onClick={onClick} key={text}>
            {text}
          </button>
        );
      })}
    </>
  );
};
