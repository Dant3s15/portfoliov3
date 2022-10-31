import classes from "./ProjectSkillsList.module.scss";

interface ListProps {
  stack: { img: string; name: string }[];
}

const ProjectSkillsList = ({ stack }: ListProps) => {
  return (
    <ul className={classes["used-skills"]}>
      <h3 className={classes["used-skills-title"]}>Used</h3>
      {stack.map((skill) => {
        return (
          <li key={Math.random()} className={classes["skill"]}>
            <div className={classes.icon}>
              <img src={skill.img} alt={`${skill.name} icon`} />
            </div>
            <p className={classes["skill-title"]}>{skill.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectSkillsList;
