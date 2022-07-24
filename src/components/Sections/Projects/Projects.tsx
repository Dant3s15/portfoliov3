import { FC, Fragment } from "react";
import classes from "./Projects.module.scss";
import ProjectsList from "./ProjectsList";
import project1 from "../../../resources/img/projects/project1.webp";
import project2 from "../../../resources/img/projects/project2.webp";
import lightapp from "../../../resources/img/projects/lightapp.webp";
import soon from "../../../resources/img/projects/soon.png";
import { skillInterface } from "../../../Types/types";

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const Projects: FC<Props> = ({ allSkillsData, isLoading }) => {
  const projectsArr = [
    {
      id: 0,
      image: project1,
      title: "Portfolio",
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{" "}
          <strong>creator</strong> , create your own character or contact me and{" "}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
      skills: [
        "html",
        "css",
        "javascript",
        "react",
        "typescript",
        "sass",
        "git",
        "github",
        "firebase",
        "vite",
      ],
      link: "https://damiansobieraj.com/",
      repo: "https://github.com/DevmianS/portfoliov3",
    },
    {
      id: 1,
      image: lightapp,
      title: "LightApp",
      overview: (
        <Fragment>
          This app will help you with choosing <strong>the best</strong> light
          bulb to buy given room size, light bulb count and few other parameters
          💡
        </Fragment>
      ),
      skills: [
        "html",
        "css",
        "javascript",
        "react",
        "typescript",
        "tailwind-css",
        "git",
        "github",
        "vite",
      ],
      link: "https://lightapp.netlify.app/",
      repo: "https://github.com/DevmianS/LightApp",
    },
    {
      id: 2,
      image: project2,
      title: "Splitter",
      overview: (
        <Fragment>
          <strong>FrontendMentor.io</strong> challenge{" "}
          <strong>Tip Calculator</strong>, done in <strong>overkill</strong>{" "}
          stack.
        </Fragment>
      ),
      skills: [
        "html",
        "css",
        "javascript",
        "react",
        "typescript",
        "sass",
        "css-modules",
        "git",
        "github",
        "vite",
      ],
      link: "https://devmian-tip-calculator.web.app/",
      repo: "https://github.com/DevmianS/tip-calculator-react",
    },
    {
      id: 3,
      image: project1,
      title: "Web-dev-API",
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ["javascript", "expressjs", "git", "github"],
      link: "https://web-dev-skills-api.herokuapp.com/",
      repo: "https://github.com/DevmianS/web-dev-skills-api",
    },
    {
      id: 4,
      image: soon,
      title: "COMING SOON...",
      overview: <Fragment></Fragment>,
      skills: ["html", "css", "javascript", "git", "github"],
      link: "#",
      repo: "#",
    },
    // {
    //   id: 4,
    //   image: project1,
    //   title: 'Web-dev-API',
    //   overview: (
    //     <Fragment>
    //       Simple <strong>API</strong> database that gives you access to the list
    //       of <strong>Web development technologies</strong> and skills.
    //     </Fragment>
    //   ),
    //   skills: ['javascript', 'expressjs', 'git', 'github'],
    //   link: 'https://portfolio-27cdd.web.app/',
    //   repo: 'https://github.com/Dant3s15/portfoliov3',
    // },
  ];

  return (
    <section id="my-projects" className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div className={classes["my-projects"]}>
        <ProjectsList
          allSkillsData={allSkillsData}
          isLoading={isLoading}
          data={{
            array: projectsArr,
          }}
        ></ProjectsList>
      </div>
    </section>
  );
};

export default Projects;
