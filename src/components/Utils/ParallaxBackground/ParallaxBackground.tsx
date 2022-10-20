import classes from "./ParallaxBackground.module.scss";

export default function ParallaxBackground({ children }: any) {
  return (
    <div className={classes.background}>
      <div className={classes["bg-container"]}>
        <div className={classes["bg-img"]}></div>
      </div>
      {children}
    </div>
  );
}
