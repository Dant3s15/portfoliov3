import { useEffect, useRef, useContext, FC, useState } from 'react';
import { skillInterface } from '../../../../Types/types';
import Skill2 from './Skill2';
import SelectedContext from '../../../../context/selected-context';
import classes from './Skills.module.scss';
import SkillInfo from '../../../UI/SkillInfo';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  className: string;
  charStateData: {
    leftChar: number;
    frontChar: number;
    rightChar: number;
  };
  allSkillsData: skillInterface[];
  isLoading: boolean;
}

const SkillsList: FC<Props> = props => {
  const skillsWindowRef = useRef<HTMLDivElement>(null);
  const characterSkills = useRef<HTMLDivElement>(null);
  const skillCharCol0 = useRef<HTMLDivElement>(null);
  const skillCharCol1 = useRef<HTMLDivElement>(null);
  const skillCharCol2 = useRef<HTMLDivElement>(null);
  const [leftCharSkills, setLeftCharSkills] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [curSkillInfo, setCurSkillInfo] = useState<skillInterface>();

  const ctx = useContext(SelectedContext);

  useEffect(() => {
    //SCROLLING SKILLS TO THE TOP ON CHARACTER CHANGE
    if (skillCharCol0.current) skillCharCol0.current.scrollTop = 0;
    if (skillCharCol1.current) skillCharCol1.current.scrollTop = 0;
    if (skillCharCol2.current) skillCharCol2.current.scrollTop = 0;
  }, [ctx.whichIsSelected]);

  const calcLevel = (skill: skillInterface[]) => {
    const charExp = skill.reduce((acc = 0, cur) => {
      return (acc += cur.level);
    }, 0);

    const totalExp = (props.allSkillsData.length - 1) * 10;

    function percentage(partialValue: number, totalValue: number) {
      return (100 * partialValue) / totalValue;
    }

    const result = percentage(charExp, totalExp);
    return Math.ceil(result);
  };

  useEffect(() => {
    if (ctx.isSelected && skillsWindowRef.current) {
      skillsWindowRef.current.classList.add(`${classes['selected--skills']}`);
    } else if (!ctx.isSelected && skillsWindowRef.current) {
      skillsWindowRef.current.classList.remove(
        `${classes['selected--skills']}`
      );
    }
  }, [ctx]);

  useEffect(() => {
    let error = false;
    if (window.localStorage.getItem('leftChar')) {
      const data = JSON.parse(window.localStorage.getItem('leftChar') || '');
      console.log(data);
      data.forEach(
        (el: { name: string; id: string; stacks: any[]; names: any[] }) => {
          if (!el.name || !el.id || !el.stacks || !el.names) {
            console.log('error');
            error = true;
          }
        }
      );
      if (!error) setLeftCharSkills(data);
    }
    // if (!error) {
    const onStorage = () => {
      setLeftCharSkills(JSON.parse(localStorage.getItem('leftChar') || ''));
    };
    window.addEventListener('storage', () => onStorage());
    // }
    return () => {
      window.removeEventListener('storage', () => {
        onStorage();
      });
    };
  }, []);

  const frontCharArr = [
    ['html', 8],
    ['css', 8],
    ['javascript', 7],
    ['typescript', 5],
    ['react', 7],
    ['sass', 7],
    ['git', 5],
    ['github', 6],
    ['npm', 5],
    ['redux', 5],
    ['css-modules', 9],
    ['bem', 5],
  ];

  const rightCharArr = props.allSkillsData.map(skill => {
    return [skill.name, 9];
  });

  const getCharSkills = (charArr: any[]) => {
    const findSkill = (skillName: string, level: number) => {
      const resultSkill = {
        ...props.allSkillsData.find(skill => {
          return skill.name === skillName;
        }),
      };
      const addLevel = { ...resultSkill, level: level };

      return addLevel;
    };
    let resultArr: any[] = [];
    charArr.forEach(item => {
      const findResult = findSkill(item[0], item[1]);
      return resultArr.push(findResult);
    });
    return resultArr;
  };

  const frontChar = getCharSkills(frontCharArr);

  const rightChar = getCharSkills(rightCharArr);

  const skillsByCharacters = [
    [...leftCharSkills],
    [...frontChar],
    [...rightChar],
  ];

  const skillsStruct = (
    id: number,
    pos: number,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const skillTooltipHandler = (skill: skillInterface, action?: string) => {
      if (action) {
        setCurSkillInfo(skill);
        setShowInfo(true);
      } else {
        setShowInfo(false);
      }
    };

    return (
      <div ref={ref} className={classes['skill-char-col']} data-character={pos}>
        <ul className={classes['skills-list']}>
          {skillsByCharacters[id].map(item => {
            {
              if (item.id === 0) return;
              return (
                <Skill2
                  key={item.id}
                  data={{
                    skillTooltipHandler,
                    setShowInfo,
                  }}
                  skill={item}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  };

  const charCreatorText = (pos: number) => {
    return (
      <div className={classes['skill-char-col']} data-character={pos}>
        <div className={`${classes['skills-list--text']}`} data-character={pos}>
          <strong>create</strong>
          <p>your</p>
          <p>web</p>
          <strong>developer</strong>
        </div>
      </div>
    );
  };

  return (
    <div className={classes['skills-col']}>
      <div
        ref={skillsWindowRef}
        className={`${classes['skills-window']} ${
          !ctx.ctaButtonClicked?.clicked ? 'not-started' : ''
        } `}
      >
        <div
          className={`${classes['skills-text']} 
         ${ctx.ctaButtonClicked?.clicked ? classes['abs-up'] : ''}`}
        >
          <p>Choose</p>
          <p>and</p>
          <p>
            <strong>level up</strong>
          </p>
          <p>your</p>
          <p>developer!</p>
        </div>
        <div
          className={`${classes['skills-card']} ${
            !ctx.ctaButtonClicked?.clicked ? classes['abs-down'] : ''
          }`}
        >
          <header className={classes['skills-window__header']}>
            <SkillInfo data={{ showInfo }} skill={curSkillInfo}></SkillInfo>

            <div
              className={`${classes['header-wrapper']} ${
                showInfo ? classes['tooltip-open'] : ''
              }`}
            >
              <div
                className={`${classes['skills-list-name']} ${
                  leftCharSkills.length !== 0 || ctx.whichIsSelected !== 0
                    ? classes.glow
                    : ''
                }`}
              >
                <h2>Unlocked Skills</h2>
              </div>
              <Tooltip placement='top' title='Calculated Total Level'>
                <div
                  className={`${classes['character-level']} ${
                    leftCharSkills.length !== 0 || ctx.whichIsSelected !== 0
                      ? classes.glowsmall
                      : ''
                  }`}
                  id='character-level'
                >
                  <div className={classes['character-level__level-title']}>
                    level
                  </div>
                  <div className={classes['character-levels']}>
                    <div
                      className={classes['character-level__level-number']}
                      data-character={props.charStateData.leftChar}
                    >
                      {props.allSkillsData.length
                        ? calcLevel(leftCharSkills)
                        : ''}
                    </div>
                    <div
                      className={classes['character-level__level-number']}
                      data-character={props.charStateData.frontChar}
                    >
                      {props.allSkillsData.length ? calcLevel(frontChar) : ''}
                    </div>
                    <div
                      className={classes['character-level__level-number']}
                      data-character={props.charStateData.rightChar}
                    >
                      {props.allSkillsData.length ? calcLevel(rightChar) : ''}
                    </div>
                  </div>
                </div>
              </Tooltip>
            </div>
          </header>
          {props.allSkillsData.length !== 0 ? (
            <div
              ref={characterSkills}
              className={`${classes['character-skills']} `}
            >
              {leftCharSkills.length
                ? skillsStruct(0, props.charStateData.leftChar, skillCharCol0)
                : charCreatorText(props.charStateData.leftChar)}
              {skillsStruct(1, props.charStateData.frontChar, skillCharCol1)}
              {skillsStruct(2, props.charStateData.rightChar, skillCharCol2)}
            </div>
          ) : ctx?.ctaButtonClicked?.clicked ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
