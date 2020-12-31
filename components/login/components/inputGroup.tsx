import { input } from "../interfaces/input";
export default ({ inputs }: { inputs: input[] }) => {
  return (
    <div>
      {inputs.map(({ placeholder, onChange, value, type, name }) => {
        return (
          <input
            key={name}
            placeholder={placeholder}
            value={value}
            type={type || "text"}
            name={name}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          ></input>
        );
      })}
    </div>
  );
};
