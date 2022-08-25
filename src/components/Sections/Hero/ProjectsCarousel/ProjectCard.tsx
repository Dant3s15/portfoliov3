import { FC, Fragment } from "react";
import classes from "./ProjectCard.module.scss";
import live from "../../../../resources/img/live.png";
import smarthphone from "../../../../resources/img/smartphone.png";
import Tilt from "react-parallax-tilt";
import CardGlass from "../../../UI/CardGlass";

interface Props {
  dataActive?: boolean | null;
  projectData: {
    title: string;
    img: {
      desktop: string;
      mobile: string;
    };
    github: string;
    live: string;
    description: string;
    stack: { img: string; name: string }[];
    curId: number;
    id: number;
  };
  projLength: number;
  direction: -1 | 1;
}

const ProjectCard: FC<Props> = ({
  dataActive,
  projectData,
  projLength,
  direction,
}) => {
  const renderStack = () => {
    return projectData.stack.map((item) => (
      <li key={item.name}>
        <img src={item.img} />
        <p>{item.name}</p>
      </li>
    ));
  };
  const activeClassHandler = () => {
    if (!dataActive) {
      if (
        projectData.curId < projectData.id ||
        (projectData.id === 0 && projectData.curId === projLength - 1)
      ) {
        if (projectData.id === projLength - 1 && projectData.curId === 0) {
          return classes["not-active-l"];
        }
        return classes["not-active-r"];
      }
      if (
        projectData.curId > projectData.id ||
        (projectData.id === projLength - 1 && projectData.curId === 0)
      ) {
        return classes["not-active-l"];
      }
    } else {
      return classes["active"];
    }
  };

  return (
    <li
      // data-active={dataActive}
      className={`${classes.card} ${activeClassHandler()}`}
    >
      <div className={classes["images-title"]}>
        <header className={classes.title}>{projectData.title}</header>
        <div className={classes.images}>
          <Tilt
            tiltAngleYInitial={10}
            transitionSpeed={900}
            scale={1.05}
            glareEnable={true}
            glareColor="#fff"
            glarePosition="all"
            glareMaxOpacity={0.2}
            perspective={1700}
            tiltMaxAngleX={5}
            tiltMaxAngleY={10}
            className={classes.tilt}
          >
            <CardGlass className={classes.links}>
              <a target="_blank" href={projectData.live}>
                <img src={live} alt="Live link" />
              </a>
              <a target="_blank" href={projectData.github}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="Github link"
                />
              </a>
            </CardGlass>
            <div className={classes["img-desktop-container"]}>
              <img
                className={classes["img-desktop"]}
                src={projectData.img.desktop}
                alt="lightapp desktop"
              />
            </div>
          </Tilt>
          <Tilt
            tiltAngleYInitial={15}
            transitionSpeed={900}
            scale={1.1}
            glareEnable={true}
            glareColor="#fff"
            glarePosition="all"
            glareMaxOpacity={0.2}
            perspective={200}
            tiltMaxAngleX={2}
            tiltMaxAngleY={5}
            className={classes["tilt-mobile"]}
          >
            <div className={classes["img-mobile-container"]}>
              {/* <Tilt> */}
              <img
                className={classes["img-mobile"]}
                src={projectData.img.mobile}
                alt="lightapp mobile"
              />
              {/* </Tilt> */}
              {/* <iframe
              // className={classes["img-mobile"]}
              src="https://lightapp.netlify.app/"
              // style="border:0px #ffffff none;"
              name="myiFrame"
              scrolling="no"
              frameBorder="0"
              width="100%"
              height="200%"
              allowFullScreen
            ></iframe> */}
            </div>
          </Tilt>
          {/* <img
            className={`${classes["img-smartphone"]}`}
            src={smarthphone}
            alt=""
          /> */}
        </div>
      </div>
      <div className={classes.overview}>
        <span className={classes.description}>{projectData.description}</span>
        <div className={classes.stack}>
          <p className={classes.created}>Created with:</p>
          <ul className={classes["stack-items"]}>{renderStack()}</ul>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
