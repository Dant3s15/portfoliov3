import { FC } from "react";
import { skillInterface } from "../../../Types/types";
import classes from "./ProjectSkillsList.module.scss";

interface ListProps {
  allSkillsData: skillInterface[];
  projectData: any;
}

const ProjectSkillsList: FC<ListProps> = ({ allSkillsData, projectData }) => {
  const findSkill = (skillName: string) => {
    allSkillsData?.map((skill: skillInterface) => {
      return skill;
    });
    const resultSkill = {
      ...allSkillsData.find(
        (skill: skillInterface) => skill.name === skillName
      ),
    };
    return resultSkill;
  };

  return projectData.skills.map((skill: string) => {
    const fetchedSkill = findSkill(skill);
    return (
      <li key={Math.random()} className={classes["skill"]}>
        <div className={classes.icon}>
          <img
            src={fetchedSkill.icon}
            alt={`${fetchedSkill.names?.[0]} icon`}
          />
        </div>
        <p className={classes["skill-title"]}>{fetchedSkill.names?.[0]}</p>
      </li>
    );
  });
};
export default ProjectSkillsList;
