import { FC, ReactNode, useEffect, useRef, useState } from "react";
import CardGlass from "../../UI/CardGlass";
import github from "../../../resources/icons/logo-github.svg";
import classes from "./ProjectCard.module.scss";
import ProjectSkillsList from "./ProjectSkillList";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

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
}

const ProjectCard: FC<CardProjectProps> = ({
  projectData,
  onClick,
  selectedState,
  style,
}) => {
  const projectCardRef = useRef<null | HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  const cardClickHandler = (e: any) => {
    e.nativeEvent.stopPropagation();

    if (projectData.id === selectedState.whichSelected) {
      selectedState.setWhichSelected(null);
    } else {
      selectedState.setWhichSelected(projectData.id);
    }

    setStep(1);
  };

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
            <p
              dangerouslySetInnerHTML={{
                __html: projectData?.description.replace(/\n/g, "<br />"),
              }}
            ></p>
          </div>
          <ProjectSkillsList stack={projectData.stack}></ProjectSkillsList>
        </div>
      </CardGlass>
    </div>
  );
};

export default ProjectCard;
