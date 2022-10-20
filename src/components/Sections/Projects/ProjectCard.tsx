import { FC, Fragment, ReactNode, useEffect, useRef, useState } from "react";
import CardGlass from "../../UI/CardGlass";
import github from "../../../resources/icons/logo-github.svg";
import classes from "./ProjectCard.module.scss";
import { skillInterface } from "../../../Types/types";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ProjectSkillsList from "./ProjectSkillList";
import Tilt from "react-parallax-tilt";
import useWindowDimensions from "../../../hooks/useWindowDimenstions";

interface CardProjectProps {
  projectData: {
    stack: { img: string; name: string }[];
    github: string;
    live: string;
    img: { desktop: string; mobile: string };
    title: string;
    overview: ReactNode | undefined;
    id: number;
    description: string;
    featured: boolean;
  };
  onClick?: any;
  style?: any;
  selectedState?: any;
  isLoading: boolean;
  // allSkillsData: skillInterface[];
}

const ProjectCard: FC<CardProjectProps> = ({
  // allSkillsData,
  isLoading,
  projectData,
  onClick,
  selectedState,
  style,
}) => {
  const projectCardRef = useRef<null | HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  // const { scrollToElement } = useScroll({
  //   scrollSpeed: 1000,
  //   containerRef: projectsContainerRef,
  // });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // let proj = document.getElementById(`project${projectData.id}`);
  //     // console.log(proj);
  //     console.log(selectedState.whichSelected);
  //     // if (proj.id === "project0") {
  //     if (projectCardRef.current && projectCardRef.current.id !== "project0") {
  //       projectCardRef.current.scrollIntoView({
  //         behavior: "auto",
  //         inline: "center",
  //         block: "nearest",
  //       });
  //       console.log("woosh");
  //     }
  //     // }
  //   }, 800);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [selectedState.whichSelected]);

  const cardClickHandler = (e: any) => {
    e.nativeEvent.stopPropagation();

    //Change with the number o projects!
    if (projectData.id === selectedState.whichSelected) {
      selectedState.setWhichSelected(null);
    } else {
      selectedState.setWhichSelected(projectData.id);
    }
    console.log(projectData.id, selectedState.whichSelected);

    // const timeout = setTimeout(() => {
    let proj = document.getElementById(`project${projectData.id}`);
    // let projects = document.getElementById("my-projects");
    // let offset = +`${projectData.id}00`;
    let projects = document.getElementById("my-projects");
    let offset = +`${projectData.id}00`;

    // projects?.scrollTo({
    //   left: offset,
    //   behavior: "smooth",
    // });
    // projects?.scrollTo({
    //   left: offset,
    //   behavior: "smooth",
    // });
    // let projWidth = proj?.offsetWidth;
    // console.log(projWidth);

    // scrollHandler(projectCardRef);
    //   // if (projectCardRef.current) {
    //   console.log(proj);
    //   proj.scrollIntoView({
    //     behavior: "smooth",
    //     inline: "center",
    //     block: "end",
    //   });
    //   // }
    // }, 800);
    // scrollToElement(projectCardRef);

    setStep(1);
  };
  //TODO
  // useEffect(() => {
  //   let projects = document.getElementById("my-projects");

  //   function scrollHandler(e) {
  //     let atSnappingPoint = e.target.scrollLeft % e.target.offsetWidth === 0;
  //     let timeOut = atSnappingPoint ? 0 : 150; //see notes

  //     clearTimeout(e.target.scrollTimeout); //clear previous timeout

  //     e.target.scrollTimeout = setTimeout(function () {
  //       //using the timeOut to evaluate scrolling state
  //       // if (!timeOut) {
  //       //   console.log("Scroller snapped!");
  //       // } else {
  //       console.log("User stopped scrolling.");
  //       let offset = +`${projectData.id}00`;
  //       console.log(e.target.scrollLeft % e.target.offsetWidth);
  //       projects?.scrollTo({
  //         left: e.target.scrollLeft % e.target.offsetWidth,
  //         behavior: "smooth",
  //       });
  //       // }
  //     }, timeOut);
  //   }

  //   projects?.addEventListener("scroll", scrollHandler);
  // }, []);

  const { width } = useWindowDimensions();
  const calcTime = () => {
    if (width > 992) return 0;
    else return 400;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (step === 1) {
        setStep(2);
      }
    }, calcTime());
    return () => {
      clearTimeout(timeout);
    };
  }, [step]);
  return (
    // <Tilt
    //   tiltAngleYInitial={25}
    //   transitionSpeed={900}
    //   scale={1}
    //   glareEnable={false}
    //   glareColor="#fff"
    //   // onEnter={() => {
    //   //   setHasEnterClass(true);
    //   // }}
    //   // glarePosition="all"
    //   glareMaxOpacity={0.3}
    //   perspective={400}
    //   tiltMaxAngleX={2}
    //   tiltMaxAngleY={5}
    //   // className={classes["tilt-mobile"]}
    //   className={`${classes["project-wrapper"]} ${
    //     projectData.id === selectedState.whichSelected
    //       ? classes["selected-project"]
    //       : ""
    //   } ${hasEnterClass ? classes.hasEnter : ""} `}
    // >
    <div
      onMouseEnter={() => {
        const root = document.documentElement;
        root.style.setProperty(
          "--dot-position",
          `${projectData.id}0% ${projectData.id}0%`
        );
        root.style.setProperty("--dot-opacity", `0.2`);
        root.style.setProperty("--vmin", `15vmin 15vmin`);
      }}
      onMouseLeave={() => {
        // setHasEnterClass(false);
        const root = document.documentElement;
        root.style.setProperty(
          "--dot-position",
          `${projectData.id}0% ${projectData.id}0%`
        );
        root.style.setProperty("--dot-opacity", `0.5`);
        selectedState.setWhichSelected(null);
        root.style.setProperty("--vmin", `5.5vmin 5.5vmin`);
      }}
      id={`project${projectData.id}`}
      className={`${classes["project-wrapper"]} ${
        projectData.id === selectedState.whichSelected && step === 1
          ? classes["selected-step1"]
          : ""
      } ${
        projectData.id === selectedState.whichSelected && step === 2
          ? classes["selected-project"]
          : ""
      }`}
      ref={projectCardRef}
      // className={`${classes["project-wrapper"]} ${
      //   projectData.id === selectedState.whichSelected
      //     ? classes["selected-project"]
      //     : ""
      // } `}
    >
      <CardGlass className={`${classes.project}`}>
        <div className={classes.links}>
          <a href={projectData?.github} target="_blank">
            <img src={github} alt="github" />
          </a>
        </div>
        <div className={classes["project-image-window"]}>
          <a
            className={classes["project-link"]}
            href={projectData?.live}
            target="_blank"
          >
            <img
              src={projectData?.img.desktop}
              className={classes["project-image"]}
            />
          </a>
        </div>
        <div
          onClick={cardClickHandler}
          className={classes["project-description"]}
        >
          <h3 className={classes["project-title"]}>
            {projectData?.title ?? "Title"}
          </h3>
          <div className={classes["project-overview"]}>
            <p>{projectData?.description}</p>
          </div>
          {/* <h3 className={classes["used-skills-title"]}>Used:</h3> */}
          {/* <ul className={classes["used-skills"]}> */}
          <ProjectSkillsList stack={projectData.stack}></ProjectSkillsList>
          {/* </ul> */}
        </div>
      </CardGlass>
    </div>
    // </Tilt>
  );
};

export default ProjectCard;
