import Typewriter from "typewriter-effect";
import classes from "./SkillsText.module.scss";
import { useInView } from "react-intersection-observer";
import useInViewDelay from "../../../../hooks/useInViewDelay";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const TextAbout = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${1})`);
        root.style.setProperty("--mask-percent", `${50}%`);
        root.style.setProperty("--blur", `blur(${30}px)`);
        root.style.setProperty("--vmin", `8vmin 8vmin`);
        root.style.setProperty("--dot-opacity", `0.75`);
        root.style.setProperty("--dot-position", `30% 30%`);
      }
    },
  });

  const { isMobile } = useWindowDimensions();

  const [inViewDelay, setInViewDelay] = useInViewDelay({ inView });
  return (
    <div ref={ref} className={classes["text-about"]}>
      <div className={`${classes.title} ${inView ? "fade-in" : "fade-out"}`}>
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
                  `<h2 class =${classes["title-span"]}><span>M</span><span>y</span> <span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span></h2>`
                )
                .start();
            }}
          />
        ) : (
          <h2 className={classes["title-span"]}>My Skills</h2>
        )}
      </div>
      <span className={`${classes.text}  ${inView ? "fade-in" : "fade-out"}`}>
        <p>
          Here is the list of skills I acquired since the start of my{" "}
          <strong>coding journey</strong>.
        </p>
        <p>
          {isMobile ? "Tap" : "Hover"} on skill icon to check how long I'm using
          it.
        </p>
      </span>
    </div>
  );
};

export default TextAbout;
