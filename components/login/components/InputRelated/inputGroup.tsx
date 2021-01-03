import { input } from "../../interfaces/input";
import Input from "./input";
export default ({ inputs }: { inputs: input[] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {inputs.map(({ placeholder, onChange, value, type, name }) => {
        return (
          <Input
            key={name}
            placeholder={placeholder}
            value={value}
            type={type || "text"}
            name={name}
            onChange={(e) => {
              onChange(e);
            }}
          ></Input>
        );
      })}
    </div>
  );
};
