import { FC, useState } from 'react';
import { skillInterface } from '../../../../../Types/types';
import SkillTooltip from '../../../../UI/SkillTooltip';
import classes from './Skill.module.scss';

interface Props {
  onSkillChange: Function;
  onTooltip?: {
    whichTooltip: number | undefined;
    setWhichTooltip: Function;
  };
  data: skillInterface;
  sign?: string;
}

const Skill: FC<Props> = props => {
  // const [showTooltip, setShowTooltip] = useState(false);

  const nameShortener = (name: string, length: number) => {
    if (name.length > length) {
      const shortName = name.slice(0, length);
      return `${shortName}...`;
    } else return name;
  };

  const levelHandler = (
    <div className={classes.level}>
      <p key={Math.random()} className={classes['level-number']}>
        {props.data.level}
      </p>
    </div>
  );

  return (
    <div
      className={`${classes.skill} ${
        props?.onTooltip?.whichTooltip === props?.data?.id
          ? classes['has-tooltip']
          : ''
      }`}
      onClick={() => {
        console.log('click');
        // props.onTooltip.setShowTooltip(true);
        if (props?.data?.id !== props?.onTooltip?.whichTooltip)
          props?.onTooltip?.setWhichTooltip(props?.data?.id);
        else props.onTooltip.setWhichTooltip(undefined);
      }}
    >
      <div className={classes.icon}>
        <img src={props.data.icon} alt={`${props.data.names[0]} icon`} />
      </div>
      <div className={classes.name}>
        {nameShortener(props.data.names[0], 10)}
      </div>
      {props.data.level ? levelHandler : ''}
      <button
        onClick={e => {
          e.stopPropagation();
          props.onSkillChange(props.data);
        }}
        className={classes['manage-skill']}
      >
        <p>{props.sign}</p>
      </button>
      {/* {props?.onTooltip?.whichTooltip === props?.data?.id ? ( */}
      <SkillTooltip data={props.data} />
      {/* ) : (
        ''
      )} */}
    </div>
  );
};

// interface Skill {
//   data: skillInterface;
// }

// const Tooltip: FC<Skill> = props => {
//   return <div>{props.data.name}</div>;
// };

export default Skill;
