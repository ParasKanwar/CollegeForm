import style from "./progress.module.css";
export default () => {
  return (
    <svg height="100" width="100" className={style.spin}>
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="3"
        strokeDasharray="142"
      />
    </svg>
  );
};
