import Skill from './Skill/Skill';
import { useState, useRef, FC, useEffect } from 'react';
import classes from './SkillAddWindow.module.scss';
import { skillInterface } from '../../../../Types/types';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  onSetLevel: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel: () => void;
  onSkillAdd: (skill: skillInterface) => void;
  skillData: skillInterface;
}

const SkillAddWindow: FC<Props> = props => {
  const [level, setLevel] = useState<number | null>(null);
  const levelSliderRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const sliderValue = levelSliderRef?.current;
    if (sliderValue) sliderValue.value = '5';
  }, []);

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

  const checkIfAddedLevel = () => {
    if (level) {
      props.onSkillAdd(props.skillData);
    } else {
      levelSliderRef.current?.classList.add(classes['click-me']);
      setTimeout(() => {
        levelSliderRef.current?.classList.remove(classes['click-me']);
      }, 1000);
    }
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
          onSkillChange={checkIfAddedLevel}
          data={props.skillData}
          sign={'+'}
        ></Skill>
        <div className={classes.levels}>
          <input
            id='level-bar'
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
