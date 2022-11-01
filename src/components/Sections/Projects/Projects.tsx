import { useEffect } from "react";
import classes from "./Projects.module.scss";
import ProjectsList from "./ProjectsList";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import useInViewDelay from "../../../hooks/useInViewDelay";
import projectsData from "../../../data/projectsData";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Projects = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${1})`);
        root.style.setProperty("--mask-percent", `${50}%`);
        root.style.setProperty("--blur", `blur(${30}px)`);
        root.style.setProperty("--vmin", `5.5vmin 5.5vmin`);
        root.style.setProperty("--dot-opacity", `0.65`);
        root.style.setProperty("--dot-position", `0% 0%`);
      }
    },
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (inView) {
      let root = document.documentElement;
      timeout = setTimeout(() => {
        root.style.setProperty("--projects-overflow", `scroll hidden`);
      }, 1000);
    } else {
      let root = document.documentElement;
      timeout = setTimeout(() => {
        root.style.setProperty("--projects-overflow", `visible`);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [inView]);

  const { isMobile } = useWindowDimensions();

  const [inViewDelay, setInViewDelay] = useInViewDelay({ inView });

  return (
    <section
      id="projects-section"
      ref={ref}
      className={`${classes.projects} wrapper`}
    >
      <div className={classes["projects-text"]}>
        <div className={`${classes["title-wrapper"]} padding`}>
          <div
            className={`${classes.title} ${
              inView ? "fade-in-r" : "fade-out-r"
            }`}
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
                      `<h2 class =${classes["title-span"]}><span>M</span><span>y</span> <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></h2>`
                    )
                    .start();
                }}
              />
            ) : (
              <h2 className={classes["title-span"]}>My Projects</h2>
            )}
          </div>
        </div>
      </div>
      <div
        id="my-projects"
        className={`${classes["my-projects"]} ${
          inView ? "fade-in" : "fade-out"
        }`}
      >
        <ProjectsList data={projectsData}></ProjectsList>
      </div>
      <div
        className={`${inView ? "fade-in" : "fade-out"} ${classes["bg-title"]}`}
      >
        PROJECTS
      </div>
    </section>
  );
};

export default Projects;
