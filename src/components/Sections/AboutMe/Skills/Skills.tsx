import SkillTile from "./SkillTile";
import classes from "./Skills.module.scss";

const Skills = () => {
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

  return <div className={classes.skills}>{renderSkills()}</div>;
};

export default Skills;
