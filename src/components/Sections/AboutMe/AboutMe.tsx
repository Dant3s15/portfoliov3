import Typewriter from "typewriter-effect";
import classes from "./AboutMe.module.scss";
import myPhoto from "../../../resources/img/character.png";
import { useInView } from "react-intersection-observer";
import useInViewDelay from "../../../hooks/useInViewDelay";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const AboutMe = () => {
  const { isMobile } = useWindowDimensions();

  const { ref, inView } = useInView({
    threshold: 0.3,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${1})`);
        root.style.setProperty("--mask-percent", `${50}%`);
        root.style.setProperty("--blur", `blur(${2}px)`);
        root.style.setProperty("--vmin", `6.5vmin 6.5vmin`);
        root.style.setProperty("--dot-opacity", `0.25`);
        root.style.setProperty("--dot-position", `50% 80%`);
        root.style.setProperty("--bg-opacity", `1`);
      }
    },
  });

  const [inViewDelay, setInViewDelay] = useInViewDelay({ inView });

  return (
    <section
      ref={ref}
      id="about-me"
      className={`${classes["about-me"]} padding`}
    >
      <div
        className={`${inView ? "fade-in" : "fade-out"} ${classes["bg-title"]}`}
      >
        ABOUT ME
      </div>
      <div className={classes["my-photo"]}>
        <img
          className={`${classes.title} ${inView ? "fade-in" : "fade-out"}`}
          src={myPhoto}
          alt="photo of me"
        />
      </div>
      <div className={classes["text-about"]}>
        <div
          className={`${classes.title} ${inView ? "fade-in-r" : "fade-out-r"}`}
        >
          {inViewDelay && !isMobile ? (
            <Typewriter
              options={{
                delay: 30,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .typeString(
                    `<h2 class =${classes["title-span"]}><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>M</span><span>e</span></h2>`
                  )
                  .start();
              }}
            />
          ) : (
            <h2 className={classes["title-span"]}>About Me</h2>
          )}
        </div>
        <span
          className={`${classes.text}  ${inView ? "fade-in-r" : "fade-out-r"}`}
        >
          Hey, my name is Damian, I'm knowledge-hungry, react, frontend web
          developer from Poland.
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
