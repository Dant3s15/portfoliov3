import { useContext, useEffect, useState } from "react";
import CardGlass from "../../../UI/CardGlass";
import ProjectCard from "./ProjectCard";
import classes from "./ProjectCarousel.module.scss";
import projectsData from "../../../../data/projectsData";
import SelectedContext from "../../../../context/selected-context";
import { useInView } from "react-intersection-observer";
// import CTAtext from "../CTAtext";

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
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [selected, isHovering]);

  const renderProjects = () => {
    return projectsData.map((proj) => (
      <ProjectCard
        direction={direction}
        projLength={projectsData.length}
        projectData={{
          title: proj.title,
          img: {
            desktop: proj.img.desktop,
            mobile: proj.img.mobile,
          },
          description: proj.description,
          stack: proj.stack,
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
  );
};

export default ProjectCarousel;
