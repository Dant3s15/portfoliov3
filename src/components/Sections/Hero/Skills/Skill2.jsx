import { Fragment } from 'react';
import classes from './Skill2.module.scss';
const Skill2 = props => {
  return (
    <Fragment>
      <button className={classes['skill-tile']}>
        <div className={classes['skill-tile-level']}>
          <p>5</p>
          {/* <p>LVL</p> */}
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
