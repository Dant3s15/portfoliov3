import classes from "./Wrapper.module.scss";

export default function Wrapper(props: any) {
  return <div className={classes.wrapper}>{props.children}</div>;
}
