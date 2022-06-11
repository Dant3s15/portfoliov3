import { FC } from 'react';
import { skillInterface } from '../../Types/types';
import classes from './SkillInfo.module.scss';

interface Props {
  skill: skillInterface | undefined;
  data: { showInfo: boolean };
}

const SkillInfo: FC<Props> = props => {
  const shortenDesc = (text: string | undefined) => {
    if (!text) return;
    if (text.length > 190) {
      const shortText = text.slice(0, 190);
      return `${shortText}...`;
    } else return text;
  };
  return (
    <div
      className={`${classes.info} ${
        props.data.showInfo ? classes['tooltip-open'] : ''
      }`}
    >
      <div className={classes['icon-title']}>
        <h3 className={classes.title}>{props?.skill?.names[0]}</h3>
        <img src={props.skill?.icon} alt='' />
      </div>
      <span className={classes.description}>
        {shortenDesc(props?.skill?.description)}
      </span>
    </div>
  );
};

export default SkillInfo;
