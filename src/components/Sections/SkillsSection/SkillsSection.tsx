import classes from "./SkillsSection.module.scss";
import Skills from "./Skills/Skills";
import TextAbout from "./SkillsText/SkillsText";

const SkillsSection = () => {
  return (
    <section className={classes["skills-section"]}>
      <TextAbout></TextAbout>
      <Skills></Skills>
    </section>
  );
};

export default SkillsSection;
