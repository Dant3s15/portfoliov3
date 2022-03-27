import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Skill from './Skill';
import AllSkills from '../Utils/AllSkills';
import classes from './Skills.module.scss';

const SkillsList = props => {
  const leftChar = [
    { ...AllSkills[3], lvl: 2 },
    { ...AllSkills[4], lvl: 1 },
    { ...AllSkills[5], lvl: 4 },
  ];
  const frontChar = [
    { ...AllSkills[1], lvl: 6 },
    { ...AllSkills[2], lvl: 7 },
    { ...AllSkills[3], lvl: 7 },
    { ...AllSkills[4], lvl: 4 },
    { ...AllSkills[5], lvl: 3 },
    { ...AllSkills[13], lvl: 7 },
    { ...AllSkills[22], lvl: 5 },
    { ...AllSkills[23], lvl: 5 },
    { ...AllSkills[26], lvl: 5 },
  ];
  const rightChar = [
    { ...AllSkills[1], lvl: 2 },

    { ...AllSkills[4], lvl: 3 },
    { ...AllSkills[5], lvl: 5 },
  ];

  const skillsByCharacters = [[...leftChar], [...frontChar], [...rightChar]];

  const skillsStruct = (id, pos) => (
    <ul className={classes['skills-list']} data-character={pos}>
      {skillsByCharacters[id].map(item => {
        {
          return <Skill key={item.id} skill={item} />;
        }
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
