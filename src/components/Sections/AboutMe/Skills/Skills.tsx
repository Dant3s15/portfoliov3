import SkillTile from "./SkillTile";
import classes from "./Skills.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const mySkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
    "Sass",
    "Git",
    "GitHub",
    "TailwindCSS",
    "NextJS",
  ];

  const renderSkills = () => {
    return mySkills.map((skillName) => (
      <SkillTile key={skillName} skillName={skillName} />
    ));
  };

  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`${classes.skills} ${
        inView ? "fade-in skill-flip" : "fade-out"
      }`}
    >
      {renderSkills()}
    </div>
  );
};

export default Skills;
