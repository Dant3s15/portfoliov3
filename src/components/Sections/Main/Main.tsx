import classes from "./Main.module.scss";

const Main = (props) => {
  return (
    <main className={`${classes.background} ${classes.gray}`}>
      {props.children}
    </main>
  );
};

export default Main;
