import { FC, ReactNode, useRef, useState } from "react";
import CardGlass from "../../UI/CardGlass";
import github from "../../../resources/icons/logo-github.svg";
import classes from "./ProjectCard.module.scss";
import { skillInterface } from "../../../Types/types";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ProjectSkillsList from "./ProjectSkillList";
import Tilt from "react-parallax-tilt";

interface CardProjectProps {
  projectData: {
    skills: any[];
    repo: string;
    link: string;
    image: string;
    title: string;
    overview: ReactNode | undefined;
    id: number;
  };
  onClick?: any;
  style?: any;
  selectedState?: any;
  isLoading: boolean;
  allSkillsData: skillInterface[];
}

const CardProject: FC<CardProjectProps> = ({
  allSkillsData,
  isLoading,
  projectData,
  onClick,
  selectedState,
  style,
}) => {
  const projectCardRef = useRef<null | HTMLDivElement>(null);
  const cardClickHandler = (e: any) => {
    e.nativeEvent.stopPropagation();

    selectedState.setWhichSelected(projectData.id);
    if (projectCardRef.current)
      projectCardRef.current.scrollIntoView({
        behavior: "auto",
        inline: "center",
        block: "nearest",
      });
  };

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
      onMouseLeave={() => {
        // setHasEnterClass(false);
        selectedState.setWhichSelected(null);
      }}
      className={`${classes["project-wrapper"]} ${
        projectData.id === selectedState.whichSelected
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
          <a href={projectData?.repo} target="_blank">
            <img src={github} alt="github" />
          </a>
        </div>
        <div className={classes["project-image-window"]}>
          <a
            className={classes["project-link"]}
            href={projectData?.link}
            target="_blank"
          >
            <img
              src={projectData?.image}
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
            <p>{projectData?.overview}</p>
          </div>
          <h3 className={classes["used-skills-title"]}>Skills Used:</h3>
          <ul className={classes["used-skills"]}>
            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <ProjectSkillsList
                allSkillsData={allSkillsData}
                projectData={projectData}
              ></ProjectSkillsList>
            )}
          </ul>
        </div>
      </CardGlass>
    </div>
    // </Tilt>
  );
};

export default CardProject;
