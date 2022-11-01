import classes from "./SkillsSection.module.scss";
import Skills from "./Skills/Skills";
import TextAbout from "./SkillsText/SkillsText";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  return (
    <section
      id="my-skills"
      ref={ref}
      className={`${classes["skills-section"]} padding wrapper`}
    >
      <TextAbout></TextAbout>
      <Skills inView={inView}></Skills>
    </section>
  );
};

export default SkillsSection;
