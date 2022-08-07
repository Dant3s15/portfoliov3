import { FC, Fragment } from "react";
import classes from "./ProjectCard.module.scss";

interface Props {
  dataActive?: boolean | null;
  projectData: {
    title: string;
    img: {
      desktop: string;
      mobile: string;
    };
    description: string;
    stack: { img: string; name: string }[];
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
    //TODO
    if (!dataActive) {
      if (direction === -1) {
        return classes["not-active-r"];
      }
      if (direction === 1) {
        return classes["not-active-l"];
      }
    } else {
      return classes["active"];
    }
  };

  return (
    <li
      data-active={dataActive}
      className={`${classes.card} ${activeClassHandler()}`}
    >
      <div className={classes["images-title"]}>
        <header className={classes.title}>{projectData.title}</header>
        <div className={classes.images}>
          <img
            className={classes["img-desktop"]}
            src={projectData.img.desktop}
            alt="lightapp desktop"
          />
          <img
            className={classes["img-mobile"]}
            src={projectData.img.mobile}
            alt="lightapp mobile"
          />
        </div>
      </div>
      <div className={classes.overview}>
        <span className={classes.description}>{projectData.description}</span>
        <div className={classes.stack}>
          <p>Created with:</p>
          <ul className={classes["stack-items"]}>{renderStack()}</ul>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
