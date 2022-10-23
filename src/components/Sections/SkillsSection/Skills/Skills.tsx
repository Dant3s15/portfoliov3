import SkillTile from "./SkillTile";
import classes from "./Skills.module.scss";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect, useState } from "react";

const Skills = ({ inView }: { inView: boolean }) => {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0.2,
  // });
  const [whichIsActive, setWhichIsActive] = useState<number>(-1);

  // const [initialAnimation, setInitialAnimation] = useState(true);

  const mySkills = [
    { name: "HTML5", time: "2021-04-10T13:28:15.000Z" },
    { name: "CSS3", time: "2021-04-10T13:28:15.000Z" },
    { name: "JavaScript", time: "2021-04-10T13:28:15.000Z" },
    { name: "Git", time: "2021-04-10T13:28:15.000Z" },
    { name: "GitHub", time: "2021-04-10T13:28:15.000Z" },
    { name: "Sass", time: "2021-05-10T13:28:15.000Z" },
    { name: "React", time: "2021-10-10T13:28:15.000Z" },
    { name: "TypeScript", time: "2022-04-10T13:28:15.000Z" },
    { name: "TailwindCSS", time: "2022-07-10T13:28:15.000Z" },
    { name: "NextJS", time: "2022-09-10T13:28:15.000Z" },
  ];

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (inView) {
      interval = setInterval(() => {
        setWhichIsActive((prev) => {
          let randomNmb = getRandomInt(0, mySkills.length - 1);
          while (randomNmb === prev) {
            randomNmb = getRandomInt(0, mySkills.length - 1);
          }

          return randomNmb;
        });
      }, 2500);
    }
    return () => {
      clearInterval(interval);
    };
  }, [inView]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWhichIsActive((prev) => {
  //       console.log(prev);
  //       if (prev >= mySkills.length) {
  //         setWhichIsActive(0);
  //       }
  //       return prev + 1;
  //     });
  //   }, 550);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [inView]);

  const renderSkills = () => {
    return mySkills.map((skill, id) => (
      <SkillTile
        // initialAnimation={initialAnimation}
        skillId={id}
        activeId={whichIsActive}
        key={skill.name}
        inView={inView}
        skill={skill}
      />
    ));
  };

  // useEffect(() => {
  //   console.log(inView);
  // }, [inView]);
  return (
    <Fragment>
      <div
        className={`${classes.skills} ${
          inView ? "fade-in-r skill-flip" : "fade-out-r"
        } `}
      >
        {renderSkills()}
      </div>
      <div
        className={`${inView ? "fade-in-r" : "fade-out-r"} ${
          classes["bg-title"]
        }`}
      >
        SKILLS
      </div>
    </Fragment>
  );
};

export default Skills;
