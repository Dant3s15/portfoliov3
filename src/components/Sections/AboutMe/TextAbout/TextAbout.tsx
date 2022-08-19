import classes from "./TextAbout.module.scss";

const TextAbout = () => {
  return (
    <div className={classes["text-about"]}>
      <header className={classes.title}>About me</header>
      <span className={classes.text}>
        Hey, my name is Damian, I'm knowledge-hungry, react, frontend web
        developer from Poland.
      </span>
    </div>
  );
};

export default TextAbout;
