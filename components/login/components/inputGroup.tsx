interface input {
  onChange?: (text) => void;
  type?: string;
  value?: string;
  placeholder?: string;
}

export default ({ inputs }: { inputs: input[] }) => {
  return (
    <div>
      {inputs.map(({ placeholder, onChange, value, type }) => {
        return (
          <input
            placeholder={placeholder}
            value={value}
            type={type || "text"}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          ></input>
        );
      })}
    </div>
  );
};
