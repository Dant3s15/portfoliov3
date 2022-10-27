import { FC, Fragment, useEffect, useRef } from "react";
import classes from "./Projects.module.scss";
import ProjectsList from "./ProjectsList";
import project1 from "../../../resources/img/projects/project1.webp";
import project2 from "../../../resources/img/projects/project2.webp";
import lightapp from "../../../resources/img/projects/lightapp.webp";
import soon from "../../../resources/img/projects/soon.png";
import { skillInterface } from "../../../Types/types";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import ProjectCarousel from "../Hero/ProjectsCarousel/ProjectCarousel";
import Tilt from "react-parallax-tilt";
import useInViewDelay from "../../../hooks/useInViewDelay";
import projectsData from "../../../data/projectsData";

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const Projects: FC<Props> = ({ allSkillsData, isLoading }) => {
  const projectsContainerRef = useRef(null);

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${1})`);
        root.style.setProperty("--mask-percent", `${50}%`);
        root.style.setProperty("--blur", `blur(${30}px)`);
        root.style.setProperty("--vmin", `5.5vmin 5.5vmin`);
        root.style.setProperty("--dot-opacity", `0.65`);
        root.style.setProperty("--dot-position", `0% 0%`);
      }
    },
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (inView) {
      let root = document.documentElement;
      timeout = setTimeout(() => {
        root.style.setProperty("--projects-overflow", `scroll hidden`);
      }, 1000);
    } else {
      let root = document.documentElement;
      timeout = setTimeout(() => {
        root.style.setProperty("--projects-overflow", `visible`);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [inView]);

  const [inViewDelay, setInViewDelay] = useInViewDelay({ inView });

  // const projectsArr = [
  //   {
  //     id: 0,
  //     image: project1,
  //     title: "Portfolio",
  //     overview: (
  //       <Fragment>
  //         Frontend game-like character <strong>selector</strong> and{" "}
  //         <strong>creator</strong> , create your own character or contact me and{" "}
  //         <strong>LEVEL ME UP!</strong>
  //       </Fragment>
  //     ),
  //     skills: ["react", "typescript", "sass"],
  //     link: "https://damiansobieraj.com/",
  //     repo: "https://github.com/DevmianS/portfoliov3",
  //   },
  //   {
  //     id: 1,
  //     image: lightapp,
  //     title: "LightApp",
  //     overview: (
  //       <Fragment>
  //         This app will help you with choosing <strong>the best</strong> light
  //         bulb to buy given room size, light bulb count and few other parameters
  //         💡
  //       </Fragment>
  //     ),
  //     skills: ["react", "typescript", "tailwind-css"],
  //     link: "https://lightapp.netlify.app/",
  //     repo: "https://github.com/DevmianS/LightApp",
  //   },
  //   {
  //     id: 2,
  //     image: lightapp,
  //     title: "LightApp",
  //     overview: (
  //       <Fragment>
  //         This app will help you with choosing <strong>the best</strong> light
  //         bulb to buy given room size, light bulb count and few other parameters
  //         💡
  //       </Fragment>
  //     ),
  //     skills: ["react", "typescript", "tailwind-css"],
  //     link: "https://lightapp.netlify.app/",
  //     repo: "https://github.com/DevmianS/LightApp",
  //   },
  //   {
  //     id: 3,
  //     image: project2,
  //     title: "Splitter",
  //     overview: (
  //       <Fragment>
  //         <strong>FrontendMentor.io</strong> challenge{" "}
  //         <strong>Tip Calculator</strong>, made in using <strong>React</strong>,
  //         <strong>TypeScript</strong> and <strong>Sass</strong>
  //       </Fragment>
  //     ),
  //     skills: ["react", "typescript", "sass"],
  //     link: "https://devmian-tip-calculator.web.app/",
  //     repo: "https://github.com/DevmianS/tip-calculator-react",
  //   },
  // {
  //   id: 3,
  //   image: project1,
  //   title: "Web-dev-API",
  //   overview: (
  //     <Fragment>
  //       <strong>API</strong> database that gives you access to the list of{" "}
  //       <strong>Web development technologies</strong> and skills.
  //     </Fragment>
  //   ),
  //   skills: ["javascript", "expressjs"],
  //   link: "https://web-dev-skills-api.herokuapp.com/",
  //   repo: "https://github.com/DevmianS/web-dev-skills-api",
  // },
  // {
  //   id: 4,
  //   image: soon,
  //   title: "COMING SOON...",
  //   overview: <Fragment></Fragment>,
  //   skills: ["html", "css", "javascript", "git", "github"],
  //   link: "#",
  //   repo: "#",
  // },
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
  // ];

  const tiltSettings = {
    tiltAngleYInitial: -30,
    transitionSpeed: 900,
    scale: 1,
    glareEnable: true,
    glareColor: "#fff",
    glarePosition: "all" as const,
    glareMaxOpacity: 0.2,
    perspective: 1700,
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 30,
    className: classes.tilt,
    tiltReverse: true,
  };
  //TODO reverse letters if not in view
  return (
    <section id="projects-section" ref={ref} className={`${classes.projects} `}>
      <div className={classes["projects-text"]}>
        <div className={`${classes["title-wrapper"]} padding`}>
          <div
            className={`${classes.title} ${
              inView ? "fade-in-r" : "fade-out-r"
            }`}
          >
            {inViewDelay && (
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
          </div>
        </div>
        {/* <div
          className={`${classes.text}  ${inView ? "fade-in-r" : "fade-out-r"}`}
        >
          Here is the list of selected projects
        </div> */}
      </div>
      <div
        id="my-projects"
        className={`${classes["my-projects"]} ${
          inView ? "fade-in" : "fade-out"
        }`}
      >
        <ProjectsList
          allSkillsData={allSkillsData}
          isLoading={isLoading}
          data={projectsData}
        ></ProjectsList>
        {/* {<ProjectCarousel />} */}
        {/* <div className={classes["project-list"]}>
                  <Tilt {...tiltSettings}>
                    <div className={classes.project}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                      incidunt.
                    </div>
                  </Tilt>
                  <Tilt {...tiltSettings}>
                    <div className={classes.project}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                      incidunt.
                    </div>
                  </Tilt>
                </div> */}
        {/* <div className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                  labore itaque laborum, ullam harum est beatae hic inventore. Doloribus
                  et libero porro sapiente tempore officiis numquam. Esse, perferendis
                  ipsam numquam deserunt fugit nihil temporibus perspiciatis sequi
                  iusto! Accusantium, dignissimos voluptatem!
                </div> */}
      </div>
      <div
        className={`${inView ? "fade-in" : "fade-out"} ${classes["bg-title"]}`}
      >
        PROJECTS
      </div>
    </section>
  );
};

export default Projects;
