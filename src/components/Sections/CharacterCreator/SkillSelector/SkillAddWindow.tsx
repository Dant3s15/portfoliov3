import Skill from './Skill/Skill';
import { useState, useRef, FC } from 'react';
import classes from './SkillAddWindow.module.scss';

interface Props {
  onSetLevel: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel: () => void;
  onSkillAdd: (skill: {}) => void;
  skillData: {
    level: number | undefined;
    icon: string;
    name: string;
    id: number;
  };
}

const SkillAddWindow: FC<Props> = props => {
  const [level, setLevel] = useState<number | null>(null);

  const levelSliderRef = useRef<HTMLInputElement>(null);

  const getLevel = (level: number | string) => {
    let lvl = +level;
    setLevel(lvl);
    props.skillData.level = lvl;
    props.onSetLevel(true);
    return level;
  };
  const cancelHandler = () => {
    props.skillData.level = undefined;
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
        <div className={classes.title}>Adding Skill</div>
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
