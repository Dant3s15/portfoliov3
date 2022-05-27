import { FC } from 'react';
import { skillInterface } from '../../Types/types';
import classes from './SkillTooltip.module.scss';

interface Skill {
  data: skillInterface;
}

const SkillTooltip: FC<Skill> = props => {
  const textShortener = (name: string | undefined, length: number) => {
    if (name) {
      if (name.length > length) {
        const textName = name.slice(0, length);
        return `${textName}...`;
      } else return name;
    }
  };

  return (
    // <div className={classes['tooltip-wrapper']}>
    <div className={classes.tooltip}>
      {textShortener(props.data.description, 230)}
    </div>
    // </div>
  );
};

export default SkillTooltip;
