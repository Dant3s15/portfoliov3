import { useEffect, useState } from "react";
import CardGlass from "../../../UI/CardGlass";
import ProjectCard from "./ProjectCard";
import classes from "./ProjectCarousel.module.scss";
import projectsData from "../../../../data/projectsData";
///PROJECT DATA
// import lightappDesktop from "../../../../resources/img/projects/lightapp/lightapp_desktop.jpg";
// import lightappMobile from "../../../../resources/img/projects/lightapp/lightapp_mobile.jpg";

const ProjectCarousel = () => {
  const [selected, setSelected] = useState(0);
  const [direction, setdirection] = useState<-1 | 1>(1);
  const [isHovering, setIsHovering] = useState(false);

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
    console.log("hover");
  };

  const carouselHandler = (direction: -1 | 1) => {
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
      onMouseOver={hoverHandler}
      onMouseLeave={() => setIsHovering(false)}
      className={classes["project-carousel"]}
    >
      <CardGlass className={classes["project-preview"]} ariaLabel="Projects">
        <button
          onClick={() => {
            carouselHandler(-1);
          }}
          className={`${classes["carousel-btn"]} ${classes.prev}`}
        >
          &#10096;
        </button>
        <button
          onClick={() => {
            carouselHandler(1);
          }}
          className={`${classes["carousel-btn"]} ${classes.next}`}
        >
          &#10097;
        </button>
        <ul>{renderProjects()}</ul>
      </CardGlass>
    </div>
  );
};

export default ProjectCarousel;
