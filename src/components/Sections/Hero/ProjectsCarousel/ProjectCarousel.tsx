import { useContext, useEffect, useState } from "react";
import CardGlass from "../../../UI/CardGlass";
import ProjectCard from "./ProjectCard";
import classes from "./ProjectCarousel.module.scss";
import projectsData from "../../../../data/projectsData";
import SelectedContext from "../../../../context/selected-context";
import { useInView } from "react-intersection-observer";
// import CTAtext from "../CTAtext";
import Tilt from "react-parallax-tilt";

const ProjectCarousel = () => {
  const [selected, setSelected] = useState(0);
  const [direction, setdirection] = useState<-1 | 1>(1);
  const [isHovering, setIsHovering] = useState(false);
  const selectedCtx = useContext(SelectedContext);
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    //TODO stop interval when hovering
    if (!isHovering) {
      intervalId = setInterval(() => {
        carouselHandler(1);
      }, 50000);
    }
    return () => clearInterval(intervalId);
  }, [selected, isHovering]);

  const renderProjects = () => {
    return projectsData.map((proj, id) => (
      <ProjectCard
        direction={direction}
        projLength={projectsData.length}
        projectData={{
          title: proj.title,
          img: {
            desktop: proj.img.desktop,
            mobile: proj.img.mobile,
          },
          github: proj.github,
          live: proj.live,
          description: proj.description,
          stack: proj.stack,
          curId: selected,
          id: id,
        }}
        key={proj.id}
        dataActive={proj.id === selected}
      ></ProjectCard>
    ));
  };
  const hoverHandler = () => {
    setIsHovering(true);
  };

  const carouselHandler = (direction: -1 | 1) => {
    //blur
    const length = projectsData.length;
    setdirection(direction);

    if (direction === 1) {
      setSelected((prev) => {
        if (prev + 1 >= length) return 0;
        else return prev + 1;
      });
    }
    if (direction === -1) {
      setSelected((prev) => {
        if (prev - 1 < 0) return length - 1;
        else return prev - 1;
      });
    }
  };

  return (
    // <Tilt
    //   tiltAngleYInitial={10}
    //   transitionSpeed={500}
    //   scale={1.05}
    //   glareEnable={true}
    //   glareColor="#fff"
    //   glarePosition="all"
    //   glareMaxOpacity={1}
    //   perspective={700}
    //   tiltMaxAngleX={2}
    //   tiltMaxAngleY={3}
    //   className={classes.tilt}
    // >
    <div
      ref={ref}
      onMouseOver={hoverHandler}
      onMouseLeave={() => setIsHovering(false)}
      className={`${classes["project-carousel"]} ${
        inView ? "fade-in" : "fade-out"
      }`}
    >
      {/* <CTAtext
        className={`${
          selectedCtx.ctaButtonClicked?.clicked ? classes.hidden : ""
        }`}
      ></CTAtext> */}
      <div
        className={`${classes["project-preview"]}`}
        // ${
        //   selectedCtx.ctaButtonClicked?.clicked ? "" : classes["hidden-left"]
        // }
        // ariaLabel="Projects"
      >
        <button
          onClick={(e) => {
            e.currentTarget.blur();
            carouselHandler(-1);
          }}
          className={`${classes["carousel-btn"]} ${classes.prev}`}
        >
          &#10096;
        </button>
        <button
          onClick={(e) => {
            e.currentTarget.blur();
            carouselHandler(1);
          }}
          className={`${classes["carousel-btn"]} ${classes.next}`}
        >
          &#10097;
        </button>
        <ul className={classes.projects}>{renderProjects()}</ul>
      </div>
    </div>
    // </Tilt>
  );
};

export default ProjectCarousel;
