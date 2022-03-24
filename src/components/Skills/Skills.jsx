import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Skill from './Skill';
import AllSkills from '../Utils/AllSkills';
import classes from './Skills.module.scss';

const skillsByCharacters = [
  [1, 3, 2],
  [1, 2, 3, 4, 5, 8, 10, 13, 21, 22, 23, 26],
  [4, 6, 8],
];

const SkillsList = props => {
  const skillsStruct = (id, pos) => (
    <ul className={classes['skills-list']} data-character={pos}>
      {skillsByCharacters[id].map(item => {
        const curSkill = AllSkills.find(skill => skill.id === item);
        return <Skill key={curSkill.id} skill={curSkill} />;
      })}
    </ul>
  );

  const skillsRoot = document.getElementById('skills-root');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        skillsStruct(0, props.charStateData.leftChar),
        skillsRoot
      )}
      {ReactDOM.createPortal(
        skillsStruct(1, props.charStateData.frontChar),
        skillsRoot
      )}
      {ReactDOM.createPortal(
        skillsStruct(2, props.charStateData.rightChar),
        skillsRoot
      )}
    </Fragment>
  );
};

export default SkillsList;
