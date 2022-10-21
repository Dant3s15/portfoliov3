import SkillTile from "./SkillTile";
import classes from "./Skills.module.scss";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";

const Skills = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const mySkills = [
    { name: "HTML5", time: "2021-04-10T13:28:15.000Z" },
    { name: "CSS3", time: "2021-04-10T13:28:15.000Z" },
    { name: "JavaScript", time: "2021-08-10T13:28:15.000Z" },
    { name: "React", time: "2021-10-10T13:28:15.000Z" },
    { name: "TypeScript", time: "2022-04-10T13:28:15.000Z" },
    { name: "Sass", time: "2021-05-10T13:28:15.000Z" },
    { name: "Git", time: "2021-04-10T13:28:15.000Z" },
    { name: "GitHub", time: "2021-04-10T13:28:15.000Z" },
    { name: "TailwindCSS", time: "2022-07-10T13:28:15.000Z" },
    { name: "NextJS", time: "2022-09-10T13:28:15.000Z" },
  ];

  const renderSkills = () => {
    return mySkills.map((skill) => (
      <SkillTile key={skill.name} inView={inView} skill={skill} />
    ));
  };

  // useEffect(() => {
  //   console.log(inView);
  // }, [inView]);
  return (
    <Fragment>
      <div
        ref={ref}
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
