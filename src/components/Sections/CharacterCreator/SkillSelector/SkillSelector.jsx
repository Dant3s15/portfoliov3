import { Fragment } from 'react';
import CardGlass from '../../../UI/CardGlass';
import classes from './SkillSelector.module.scss';

const SkillSelector = props => {
  return (
    <Fragment>
      <div className={classes['skill-selector']}>
        <CardGlass>
          <div className={classes['skills-selector__grid']}>
            <div className={classes.title}>All Skills</div>
            <div className={classes.title}>Added Skills</div>
            <div className={classes['skills-menu']}>Skills list</div>
            <div className={classes['skills-menu']}>Added skills list</div>
          </div>
        </CardGlass>
      </div>
    </Fragment>
  );
};

export default SkillSelector;
