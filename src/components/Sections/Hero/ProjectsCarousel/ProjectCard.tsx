import { FC, Fragment } from "react";
import classes from "./ProjectCard.module.scss";
import live from "../../../../resources/img/live.png";
import smarthphone from "../../../../resources/img/smartphone.png";
import Tilt from "react-parallax-tilt";
import CardGlass from "../../../UI/CardGlass";
import projectsData from "../../../../data/projectsData";

interface Props {
  selected: number;
}

const ProjectCard: FC<Props> = ({ selected }) => {
  const activeClassHandler = (id: number) => {
    if (selected < id || (id === 0 && selected === projectsData.length - 1)) {
      if (id === projectsData.length - 1 && selected === 0) {
        return classes["not-active-left"];
      }
      return classes["not-active-right"];
    }
    if (selected > id || (id === projectsData.length - 1 && selected === 0)) {
      return classes["not-active-left"];
    } else {
      return classes["active"];
    }
  };

  return (
    <li className={`${classes.card}}`}>
      <div className={classes["images-title"]}>
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
            <header className={`${classes.title}`}>
              {projectsData.map((proj, id) => (
                <span key={id} className={`${activeClassHandler(id)}`}>
                  {proj.title}
                </span>
              ))}
            </header>
            <div className={classes["img-desktop-container"]}>
              {projectsData.map((proj, id) => {
                return (
                  <img
                    key={id}
                    className={`${classes["img-desktop"]} ${activeClassHandler(
                      id
                    )}`}
                    src={proj.img.desktop}
                    alt="lightapp desktop"
                  />
                );
              })}
            </div>
            <CardGlass className={classes.links}>
              <a target="_blank" href={projectsData[selected].live}>
                <img src={live} alt="Live link" />
              </a>
              <a target="_blank" href={projectsData[selected].github}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="Github link"
                />
              </a>
            </CardGlass>
          </Tilt>
          <Tilt
            tiltAngleYInitial={15}
            transitionSpeed={900}
            scale={1.1}
            glareEnable={true}
            glareColor="#fff"
            glarePosition="all"
            glareMaxOpacity={0.3}
            perspective={200}
            tiltMaxAngleX={2}
            tiltMaxAngleY={5}
            className={classes["tilt-mobile"]}
          >
            <div className={`${classes["img-mobile-container"]} `}>
              {projectsData.map((proj, id) => {
                return (
                  <img
                    key={id}
                    className={`${classes["img-mobile"]} ${activeClassHandler(
                      id
                    )}`}
                    src={proj.img.mobile}
                    alt="lightapp mobile"
                  />
                );
              })}
            </div>
          </Tilt>
        </div>
      </div>
      {projectsData.map((proj, id) => {
        return (
          <div
            key={id}
            className={`${classes.overview} ${activeClassHandler(id)}`}
          >
            <span className={`${classes.description}`}>{proj.description}</span>
            <div className={classes.stack}>
              <p className={classes.created}>Created with:</p>
              <ul className={classes["stack-items"]}>
                {proj.stack.map((item) => (
                  <li key={item.name}>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default ProjectCard;
