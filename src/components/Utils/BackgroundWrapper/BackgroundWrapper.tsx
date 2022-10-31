import classes from "./BackgroundWrapper.module.scss";

export default function BackgroundWrapper({ children }: any) {
  return (
    <div className={classes.background}>
      <div className={classes["bg-container"]}>
        <div className={classes["bg-img"]}></div>
      </div>
      {children}
    </div>
  );
}
