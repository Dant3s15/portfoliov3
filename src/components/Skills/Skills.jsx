import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Skill from './Skill';
import AllSkills from '../Utils/AllSkills';
import classes from './Skills.module.scss';

// const skillsByCharacters = [
//   [1, 3, 2],
//   [1, 2, 3, 4, 5, 8, 10, 13, 21, 22, 23, 26],
//   [4, 6, 8],
// ];

const SkillsList = props => {
  // const calcCurSkillLvl = (skillNmb, skillLvl) => {
  //   return { skillNmb, skillLvl };
  // };
  // console.log(calcCurSkillLvl(2, 9));
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
  ];
  const rightChar = [
    { ...AllSkills[1], lvl: 2 },

    { ...AllSkills[4], lvl: 3 },
    { ...AllSkills[5], lvl: 5 },
  ];

  // const frontChar = [{ ...AllSkills[1], lvl: 9 }];
  // console.log(myChar);

  const skillsByCharacters = [[...leftChar], [...frontChar], [...rightChar]];
  //TODO TEMP:
  // for (let i = 1; i < 70; i++) {
  //   skillsByCharacters[1][i] = AllSkills[i].id;
  // }

  const skillsStruct = (id, pos) => (
    <ul className={classes['skills-list']} data-character={pos}>
      {/* {skillsByCharacters[id].map(item => {
        const curSkill = AllSkills.find(skill => skill.id === item);
        return <Skill key={curSkill.id} skill={curSkill} />;
      })} */}
      {skillsByCharacters[id].map(item => {
        console.log(item);
        {
          /* const curSkill = AllSkills.find(skill => skill.id === item); */
        }

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
