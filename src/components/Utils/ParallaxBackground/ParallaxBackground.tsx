import classes from "./ParallaxBackground.module.scss";

export default function ParallaxBackground({ children }) {
  return <div className={classes.background}>{children}</div>;
}
