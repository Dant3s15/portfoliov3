import Skill from './Skill/Skill';
import { useState, useRef, FC } from 'react';
import classes from './SkillAddWindow.module.scss';
import { skillInterface } from '../../../../Types/types';

interface Props {
  onSetLevel: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel: () => void;
  onSkillAdd: (skill: skillInterface) => void;
  skillData: skillInterface;
}

const SkillAddWindow: FC<Props> = props => {
  const [level, setLevel] = useState<number | null>(null);

  const levelSliderRef = useRef<HTMLInputElement>(null);

  const getLevel = (level: number | string) => {
    let lvl = +level;
    setLevel(+level);
    props.skillData.level = lvl;
    props.onSetLevel(true);
  };
  const cancelHandler = () => {
    props.skillData.level = 0;
    props.onSetLevel(false);
    props.onCancel();
  };

  return (
    <div className={classes.blur} onClick={cancelHandler}>
      <div
        className={classes['skill-add-window']}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <p className={classes.title}>Adding Skill</p>
        <Skill
          onSkillChange={props.onSkillAdd}
          data={props.skillData}
          sign={'+'}
        ></Skill>
        <div className={classes.levels}>
          <input
            onChange={() => {
              getLevel(levelSliderRef.current?.value!);
            }}
            ref={levelSliderRef}
            type='range'
            min='1'
            max='10'
          />
        </div>
      </div>
    </div>
  );
};

export default SkillAddWindow;
