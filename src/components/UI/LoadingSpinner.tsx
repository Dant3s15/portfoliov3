import Typewriter from "typewriter-effect";
import classes from "./LoadingSpinner.module.scss";
const LoadingSpinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.wrapper}>
        <Typewriter
          options={{
            loop: true,
            delay: 150,
            cursor: "_",
          }}
          onInit={(typewriter) => {
            typewriter.typeString("Loading").pauseFor(1000).deleteAll().start();
          }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
