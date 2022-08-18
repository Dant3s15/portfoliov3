import classes from "./TextAbout.module.scss";

const TextAbout = () => {
  return (
    <div className={classes["text-about"]}>
      <header className={classes.title}>About me</header>
      <span className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla
        quis placeat dignissimos? Commodi sunt eligendi quaerat cupiditate
        dolorem dolorum.
      </span>
    </div>
  );
};

export default TextAbout;
