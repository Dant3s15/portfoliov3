import { FC, Fragment } from 'react';
import classes from './Skill2.module.scss';

interface Props {
  skill: {
    name: string;
    lvl?: number;
    icon?: string;
  };
}

const Skill2: FC<Props> = (props: Props) => {
  return (
    <Fragment>
      <button className={`${classes['skill-tile']}`}>
        <div className={classes['skill-tile-level']}>
          <p>{props.skill.lvl}</p>
        </div>
        <div className={classes['skill-tile-icon']}>
          <img src={props.skill.icon}></img>
        </div>
        <div className={classes['skill-tile-name']}>
          <p>{props.skill.name}</p>
        </div>
      </button>
    </Fragment>
  );
};

export default Skill2;
