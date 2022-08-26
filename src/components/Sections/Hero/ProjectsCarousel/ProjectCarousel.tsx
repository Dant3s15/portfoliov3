import { useContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import classes from "./ProjectCarousel.module.scss";
import projectsData from "../../../../data/projectsData";
import SelectedContext from "../../../../context/selected-context";
import { useInView } from "react-intersection-observer";

const ProjectCarousel = () => {
  const [selected, setSelected] = useState(0);
  const [direction, setdirection] = useState<-1 | 1>(1);
  const [isHovering, setIsHovering] = useState(false);
  const selectedCtx = useContext(SelectedContext);
  const [btnDelayed, setBtnDelayed] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (!isHovering) {
      intervalId = setInterval(() => {
        carouselHandler(1);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [selected, isHovering]);

  const hoverHandler = () => {
    setIsHovering(true);
  };

  const carouselHandler = (direction: -1 | 1) => {
    // if (!btnDelayed) {
    setBtnDelayed(() => true);
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
    // }
    // else {
    //   setTimeout(() => {
    //     setBtnDelayed(() => false);
    //   }, 1000);
    // }
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
      <div className={`${classes["project-preview"]}`}>
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
        <ul className={classes.projects}>
          <ProjectCard selected={selected}></ProjectCard>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCarousel;
