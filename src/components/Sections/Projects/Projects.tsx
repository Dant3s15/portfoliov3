import { FC, Fragment } from "react";
import classes from "./Projects.module.scss";
import ProjectsList from "./ProjectsList";
import project1 from "../../../resources/img/projects/project1.webp";
import project2 from "../../../resources/img/projects/project2.webp";
import lightapp from "../../../resources/img/projects/lightapp.webp";
import soon from "../../../resources/img/projects/soon.png";
import { skillInterface } from "../../../Types/types";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const Projects: FC<Props> = ({ allSkillsData, isLoading }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

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
      skills: ["react", "typescript", "sass"],
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
      skills: ["react", "typescript", "tailwind-css"],
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
          <strong>Tip Calculator</strong>, made in using <strong>React</strong>,
          <strong>TypeScript</strong> and <strong>Sass</strong>
        </Fragment>
      ),
      skills: ["react", "typescript", "sass"],
      link: "https://devmian-tip-calculator.web.app/",
      repo: "https://github.com/DevmianS/tip-calculator-react",
    },
    {
      id: 3,
      image: project1,
      title: "Web-dev-API",
      overview: (
        <Fragment>
          <strong>API</strong> database that gives you access to the list of{" "}
          <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ["javascript", "expressjs"],
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
  //TODO reverse letters if not in view
  return (
    <section ref={ref} id="my-projects" className={classes.projects}>
      <div className={classes["title-wrapper"]}>
        <h2 className={`${classes.title} ${inView ? "fade-in" : "fade-out"}`}>
          {inView && (
            <Typewriter
              options={{
                delay: 30,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .typeString(
                    `<h2 class =${classes["title-span"]}><span>M</span><span>y</span> <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></h2>`
                  )
                  .start();
              }}
            />
          )}

          {/* <Typewriter
          key={Math.random()}
          options={{
            delay: 30,
            cursor: "",
          }}
          onInit={(typewriter) => {
            !inView &&
              typewriter
                .pasteString(
                  `<span class =${classes["title-span"]}><span>M</span><span>y</span> <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></span>`
                )
                .deleteAll(30)
                .pauseFor(300)
                .start();
          }}
        /> */}
          {/* )} */}
        </h2>
      </div>
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
