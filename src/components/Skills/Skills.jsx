import { Fragment, useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import Skill from './Skill';
import AllSkills from '../Utils/AllSkills';
import classes from './Skills.module.scss';

const SkillsList = props => {
  const skillsWindowRef = useRef();

  useEffect(() => {
    if (props.onReceivedSelectState) {
      skillsWindowRef.current.classList.add(`${classes['selected--skills']}`);
    } else {
      skillsWindowRef.current.classList.remove(
        `${classes['selected--skills']}`
      );
    }
  }, [props.onReceivedSelectState]);

  // useEffect(() => {
  //   if (props.charStateData) {
  //     console.log(props.charStateData);
  //   }
  // }, [props.charStateData]);

  // useEffect(() => {
  //   if (selected) {
  //     console.log('selected');
  //   }
  // }, [selected]);

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

  // const skillsRoot = document.getElementById('skills-root');
  // return (
  //   <div className={classes['skills-list']}>
  //     {skillsStruct(0, props.charStateData.leftChar)}
  //     {skillsStruct(1, props.charStateData.frontChar)}
  //     {skillsStruct(2, props.charStateData.rightChar)}
  //   </div>
  // );
  // console.log(props.onCtaButtonChange);

  return (
    <div className={classes['skills-col']}>
      {/* <div>{props.onCtaButtonChange ? 'tru' : 'fal'}</div> */}
      <div
        ref={skillsWindowRef}
        className={`card--glass ${classes['skills-window']} ${
          !props.onCtaButtonChange.clicked ? 'not-started' : ''
        } `}
      >
        <div
          className={`${classes['skills-text']} shine ${
            props.onCtaButtonChange.clicked ? classes['abs-up'] : ''
          }`}
        >
          <p>Choose</p>
          <p>and</p>
          <p>
            <strong className='shine'> level up</strong>
          </p>
          <p>your</p>
          <p>developer!</p>
        </div>
        <div
          className={`${classes['skills-card']} ${
            !props.onCtaButtonChange.clicked ? classes['abs-down'] : ''
          }`}
        >
          <header className={classes['skills-window__header']}>
            <div className={classes['skills-list-name']}>
              <h2>Skills</h2>
            </div>
            <div className={classes['character-level']}>
              <div className={classes['character-level__level-title']}>
                level
              </div>
              <div className={classes['character-levels']}>
                <div
                  className={classes['character-level__level-number']}
                  data-character='0'
                >
                  111
                </div>
                <div
                  className={classes['character-level__level-number']}
                  data-character='1'
                >
                  222
                </div>
                <div
                  className={classes['character-level__level-number']}
                  data-character='2'
                >
                  333
                </div>
              </div>
            </div>
          </header>
          {/* <div className={classes['skills-list']}> */}
          <div className={classes['character-skills']}>
            {skillsStruct(0, props.charStateData.leftChar)}
            {skillsStruct(1, props.charStateData.frontChar)}
            {skillsStruct(2, props.charStateData.rightChar)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
