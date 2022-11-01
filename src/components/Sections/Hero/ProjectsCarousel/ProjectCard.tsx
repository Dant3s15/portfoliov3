import { FC, useEffect, useState } from "react";
import classes from "./ProjectCard.module.scss";
import live from "../../../../resources/img/live.png";
import Tilt from "react-parallax-tilt";
import CardGlass from "../../../UI/CardGlass";
import projectsData from "../../../../data/projectsData";

interface Props {
  selected: number;
}

const ProjectCard: FC<Props> = ({ selected }) => {
  const [featuredProjects, setFeaturedProjects] = useState<
    {
      id: number;
      featured: boolean;
      title: string;
      img: {
        desktop: string;
        mobile: string;
      };
      github: string;
      live: string;
      description: string;
      stack: {
        img: string;
        name: string;
      }[];
    }[]
  >(projectsData);
  useEffect(() => {
    setFeaturedProjects(projectsData.filter((project) => project.featured));
  }, []);

  const activeClassHandler = (id: number) => {
    if (
      selected < id ||
      (id === 0 && selected === featuredProjects.length - 1)
    ) {
      if (id === featuredProjects.length - 1 && selected === 0) {
        return classes["not-active-left"];
      }
      return classes["not-active-right"];
    }
    if (
      selected > id ||
      (id === featuredProjects.length - 1 && selected === 0)
    ) {
      return classes["not-active-left"];
    } else {
      return classes["active"];
    }
  };
  //TODO drag!!!
  return (
    <li className={`${classes.card}`}>
      <div className={classes["images-title"]}>
        <div className={classes.images}>
          <Tilt
            tiltAngleYInitial={6}
            transitionSpeed={2500}
            scale={1.05}
            glareEnable={true}
            glareColor="#fff"
            glarePosition="all"
            glareMaxOpacity={0.2}
            perspective={1700}
            tiltMaxAngleX={2}
            tiltMaxAngleY={6}
            className={classes.tilt}
          >
            <div className={classes["img-desktop-container"]}>
              <div className={classes["img-drag-container"]}>
                {featuredProjects.map((proj, id) => {
                  return (
                    <img
                      draggable="false"
                      key={id}
                      className={`${
                        classes["img-desktop"]
                      } ${activeClassHandler(id)}`}
                      src={proj.img.desktop}
                      alt="lightapp desktop"
                    />
                  );
                })}
              </div>
            </div>
            <CardGlass className={classes.links}>
              <a target="_blank" href={featuredProjects[selected].live}>
                <img src={live} alt="Live link" />
              </a>
              <a target="_blank" href={featuredProjects[selected].github}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="Github link"
                />
              </a>
            </CardGlass>
            <header className={`${classes.title}`}>
              {featuredProjects.map((proj, id) => (
                <span key={id} className={`${activeClassHandler(id)}`}>
                  {proj.title}
                </span>
              ))}
            </header>
          </Tilt>
          <Tilt
            tiltAngleYInitial={2}
            transitionSpeed={1500}
            scale={1.1}
            glareEnable={true}
            glareColor="#fff"
            glarePosition="all"
            glareMaxOpacity={0.3}
            perspective={700}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            className={classes["tilt-mobile"]}
          >
            <div className={`${classes["img-mobile-container"]} `}>
              {featuredProjects.map((proj, id) => {
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
      {featuredProjects.map((proj, id) => {
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
