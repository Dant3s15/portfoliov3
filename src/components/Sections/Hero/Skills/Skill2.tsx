import { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';
import classes from './Skill2.module.scss';
import { skillInterface } from '../../../../Types/types';

interface Props {
  skill: skillInterface;
  data: {
    skillTooltipHandler: (skill: skillInterface, action?: string) => void;
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Skill2: FC<Props> = (props: Props) => {
  const nameShortener = (name: string) => {
    if (name.length > 20) {
      const shortName = name.slice(0, 20);
      return `${shortName}...`;
    } else return name;
  };

  return (
    <div className={classes.wrapper}>
      <button
        className={`${classes['skill-tile']} `}
        onMouseDown={() => {
          props.data.skillTooltipHandler(props.skill, 'add');
        }}
        onMouseLeave={() => {
          props.data.skillTooltipHandler(props.skill);
        }}
      >
        <Tooltip
          arrow
          placement='top'
          title={`${props.skill.name.toUpperCase()} Proficiency Level`}
        >
          <div className={`${classes['skill-tile-level']}`}>
            <span>{props.skill.level}</span>
          </div>
        </Tooltip>
        <div className={classes['skill-tile-icon']}>
          <img
            src={props.skill.icon}
            alt={`${props.skill.names[0]} icon`}
          ></img>
        </div>
        <div className={classes['skill-tile-name']}>
          <p>{nameShortener(props.skill.names[0])}</p>
        </div>
      </button>
    </div>
  );
};

export default Skill2;
