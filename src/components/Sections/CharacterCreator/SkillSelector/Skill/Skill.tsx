import { FC } from 'react';
import { skillInterface } from '../../../../../Types/types';
import classes from './Skill.module.scss';

interface Props {
  onSkillChange: Function;
  data: skillInterface;
  sign?: string;
}

const Skill: FC<Props> = props => {
  const nameShortener = (name: string) => {
    if (name.length > 17) {
      const shortName = name.slice(0, 17);
      return `${shortName}...`;
    } else return name;
  };

  const levelHandler = (
    <div className={classes.level}>
      <p key={Math.random()} className={classes['level-number']}>
        {props.data.level}
      </p>
    </div>
  );

  return (
    <div className={classes.skill}>
      <div className={classes.icon}>
        <img src={props.data.icon} alt={`${props.data.names[0]} icon`} />
      </div>
      <div className={classes.name}>{nameShortener(props.data.names[0])}</div>
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
