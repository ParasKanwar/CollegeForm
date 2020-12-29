import { PropsWithChildren } from "react";

export default (props: PropsWithChildren<{}>) => {
  return (
    <div style={{ width: "300px", height: "300px" }}>{props.children}</div>
  );
};
