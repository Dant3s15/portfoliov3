import { FC, Fragment } from 'react';
import { skillInterface } from '../../../../Types/types';
import classes from './Skill2.module.scss';

interface Props {
  skill: skillInterface;
}

const Skill2: FC<Props> = (props: Props) => {
  return (
    <Fragment>
      <button className={`${classes['skill-tile']}`}>
        <div className={classes['skill-tile-level']}>
          <p>{props.skill.level}</p>
        </div>
        <div className={classes['skill-tile-icon']}>
          <img
            src={props.skill.icon}
            alt={`${props.skill.names[0]} icon`}
          ></img>
        </div>
        <div className={classes['skill-tile-name']}>
          <p>{props.skill.names[0]}</p>
        </div>
      </button>
    </Fragment>
  );
};

export default Skill2;
