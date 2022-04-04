import { Fragment } from 'react';
import classes from './SkillSelector.scss';
//TODO classes not taking effect
const SkillSelector = props => {
  return (
    <Fragment>
      <div className={classes['skill-selector']}>Selector</div>
    </Fragment>
  );
};

export default SkillSelector;
