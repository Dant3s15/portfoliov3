import { FC, Fragment, useState } from 'react';
import { skillInterface } from '../../../../Types/types';
import SkillInfo from '../../../UI/SkillInfo';
import classes from './Skill2.module.scss';

interface Props {
  skill: skillInterface;
  data: {
    skillTooltipHandler: (skill: skillInterface, action?: string) => void;
    // skillTooltipCancel: () => void;
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Skill2: FC<Props> = (props: Props) => {
  // const [showInfo, setShowInfo] = useState(false);
  const nameShortener = (name: string) => {
    if (name.length > 20) {
      const shortName = name.slice(0, 20);
      return `${shortName}...`;
    } else return name;
  };

  return (
    <div className={classes.wrapper}>
      {/* {showInfo ? <SkillInfo skill={props.skill}></SkillInfo> : ''} */}
      <button
        className={`${classes['skill-tile']}`}
        onMouseDown={() => {
          props.data.skillTooltipHandler(props.skill, 'add');

          // setShowInfo(true);
        }}
        onMouseLeave={() => {
          props.data.skillTooltipHandler(props.skill);
        }}
      >
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
          <p>{nameShortener(props.skill.names[0])}</p>
        </div>
      </button>
    </div>
  );
};

export default Skill2;
