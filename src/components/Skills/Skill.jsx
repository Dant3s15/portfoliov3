import { Fragment } from 'react';
import classes from './Skill.module.scss';

const Skill = props => {
  const calcSkillBar = level => {
    const generateBar = nmb => {
      let skillLvlBar = '';
      for (let i = 1; i <= nmb; i++) {
        skillLvlBar += '-';
      }
      return skillLvlBar;
    };

    const emptyBar = 10 - level;

    return (
      <Fragment>
        <strong>{generateBar(level)}</strong>
        <p>{generateBar(emptyBar)}</p>
      </Fragment>
    );
  };

  return (
    <li className={classes['skills-list__skill']} key={props.skill.id}>
      {props.skill.icon ? <img src={props.skill.icon}></img> : ''}
      <a href='/#' className={classes['skill-name']}>
        {props.skill.name}
      </a>
      <div className={classes['skill-bar']}>
        {calcSkillBar(props.skill.lvl)}
      </div>
    </li>
  );
};

export default Skill;
