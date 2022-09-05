import classes from "./AboutMe.module.scss";
import Skills from "./Skills/Skills";
import TextAbout from "./SkillsText/SkillsText";

const AboutMe = () => {
  return (
    <section className={classes["about-me"]}>
      <TextAbout></TextAbout>
      <Skills></Skills>
    </section>
  );
};

export default AboutMe;
