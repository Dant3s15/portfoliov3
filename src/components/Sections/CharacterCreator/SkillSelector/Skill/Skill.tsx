import { FC } from 'react';
import { skillInterface } from '../../../../../Types/types';
import classes from './Skill.module.scss';

interface Props {
  onSkillChange: Function;
  data: skillInterface;
  sign?: string;
}

const Skill: FC<Props> = props => {
  const levelHandler = (
    <div className={classes.level}>
      {/* <p className={classes['level-title']}>LVL</p> */}
      <p key={Math.random()} className={classes['level-number']}>
        {props.data.level}
      </p>
    </div>
  );

  return (
    <div className={classes.skill}>
      <div className={classes.icon}>
        <img src={props.data.icon} alt='skill icon' />
      </div>
      <div className={classes.name}>{props.data.name}</div>
      {props.data.level ? levelHandler : ''}
      <button
        onClick={() => {
          props.onSkillChange(props.data);
        }}
        className={classes['manage-skill']}
      >
        <p>{props.sign}</p>
      </button>
    </div>
  );
};

export default Skill;
