import classes from "./Main.module.scss";

const Main = ({ children }: any) => {
  return (
    <main className={`${classes.background} ${classes.gray}`}>{children}</main>
  );
};

export default Main;
