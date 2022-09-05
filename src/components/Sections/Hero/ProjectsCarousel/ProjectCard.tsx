import { FC, Fragment } from "react";
import classes from "./ProjectCard.module.scss";
import live from "../../../../resources/img/live.png";
import smarthphone from "../../../../resources/img/smartphone.png";
import Tilt from "react-parallax-tilt";
import CardGlass from "../../../UI/CardGlass";
import projectsData from "../../../../data/projectsData";
import { motion } from "framer-motion";

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
            <motion.div className={classes["img-desktop-container"]}>
              <motion.div
                className={classes["img-drag-container"]}
                // drag="x"
                // whileDrag={{ cursor: "grabbing" }}
                // style={{ opacity: 0.1 }}
              >
                {projectsData.map((proj, id) => {
                  return (
                    // <motion.div >
                    <img
                      key={id}
                      className={`${
                        classes["img-desktop"]
                      } ${activeClassHandler(id)}`}
                      src={proj.img.desktop}
                      alt="lightapp desktop"
                    />
                    // </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
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
                  // <iframe
                  //   src="https://devmian-tip-calculator.web.app/"
                  //   // style="border:0px #ffffff none;"
                  //   name="myiFrame"
                  //   scrolling="no"
                  //   frameBorder="0"
                  //   className={`${classes["img-mobile"]} ${activeClassHandler(
                  //     id
                  //   )}`}
                  //   // marginheight="0px"
                  //   // marginwidth="0px"
                  //   // height="915px"
                  //   // width="412px"
                  //   allowFullScreen
                  // ></iframe>
                  // <iframe
                  //   className={`${classes["img-mobile"]} ${activeClassHandler(
                  //     id
                  //   )}`}
                  //   src={proj.live}
                  //   //                   style="width:1000px; height:1400px;-moz-transform: scale(0.5, 0.5);
                  //   // -webkit-transform: scale(0.5, 0.5);
                  //   // -o-transform: scale(0.5, 0.5);
                  //   // -ms-transform: scale(0.5, 0.5);
                  //   // transform: scale(0.5, 0.5);
                  //   // -moz-transform-origin: top left;
                  //   // -webkit-transform-origin: top left;
                  //   // -o-transform-origin: top left;
                  //   // -ms-transform-origin: top left;
                  //   // transform-origin: top left;"
                  // >
                  //   <p>Your browser does not support iframes.</p>
                  // </iframe>

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
