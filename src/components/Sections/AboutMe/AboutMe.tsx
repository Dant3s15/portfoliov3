import Typewriter from "typewriter-effect";
import classes from "./AboutMe.module.scss";
import myPhoto from "../../../resources/img/character.webp";
import { useInView } from "react-intersection-observer";
import useInViewDelay from "../../../hooks/useInViewDelay";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const AboutMe = () => {
  const { isMobile } = useWindowDimensions();

  const { ref, inView } = useInView({
    threshold: 0.2,
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
      className={`${classes["about-me"]} padding wrapper`}
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
          {/* <p>
            I'm Damian,
            <br /> <strong>React Frontend Developer</strong> from Poland.
            <br />
            Hungry for knowledge and eager to learn.
          </p> */}
          <p>
            I am Damian, a frontend developer with passion for creating
            user-friendly web applications.
            <br />
            <br />I am a quick learner, team player and have strong
            problem-solving skills. <br />
            <br />
            Continuously seeking to improve and create visually appealing and
            high-performance web applications.
          </p>
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
