import { FC } from 'react';
import { skillInterface } from '../../Types/types';
import classes from './SkillTooltip.module.scss';

interface Skill {
  data: skillInterface;
}

const SkillTooltip: FC<Skill> = props => {
  return (
    // <div className={classes['tooltip-wrapper']}>
    <div className={classes.tooltip}>{props.data.description}</div>
    // </div>
  );
};

export default SkillTooltip;
