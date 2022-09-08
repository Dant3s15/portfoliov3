import Typewriter from "typewriter-effect";
import classes from "./SkillsText.module.scss";
import { useInView } from "react-intersection-observer";

const TextAbout = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });
  return (
    <div className={classes["text-about"]}>
      <header
        ref={ref}
        className={`${classes.title} ${inView ? "fade-in" : "fade-out"}`}
      >
        {inView && (
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(300)
                .typeString(
                  `<span class =${classes["title-span"]}><span>M</span><span>y</span> <span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span></span>`
                )
                .start();
            }}
          />
        )}
      </header>
      <span className={classes.text}>
        Hey, my name is Damian, I'm knowledge-hungry, react, frontend web
        developer from Poland.
      </span>
    </div>
  );
};

export default TextAbout;
