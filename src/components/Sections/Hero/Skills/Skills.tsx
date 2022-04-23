import { useEffect, useRef, useContext, FC, LegacyRef } from 'react';

import Skill2 from './Skill2';
import AllSkills from '../../../Utils/AllSkills';
import SelectedContext from '../../../../context/selected-context';

import classes from './Skills.module.scss';

interface Props {
  className: string;
  onCtaButtonChange: { clicked: boolean };
  charStateData: {
    leftChar: number;
    frontChar: number;
    rightChar: number;
  };
}

const SkillsList: FC<Props> = props => {
  const skillsWindowRef = useRef<HTMLDivElement>(null);
  const characerSkills = useRef<HTMLDivElement>(null);
  const skillCharCol0 = useRef<HTMLDivElement>(null);
  const skillCharCol1 = useRef<HTMLDivElement>(null);
  const skillCharCol2 = useRef<HTMLDivElement>(null);

  const ctx = useContext(SelectedContext);
  const countLevel = (
    skill: {
      lvl: number;
      id: number;
      name: string;
    }[]
  ) => {
    const charExp = skill.reduce((acc = 0, cur) => {
      if (
        cur.name === 'JavaScript' ||
        cur.name === 'React' ||
        cur.name === 'Vue' ||
        cur.name === 'Angular'
      ) {
        return (acc += 3 * cur.lvl);
      }
      return (acc += cur.lvl);
    }, 0);

    const totalExp = (AllSkills.length - 1) * 10;

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

  const leftChar: { lvl: number; id: number; name: string }[] = [
    // { ...AllSkills[3], lvl: 2 },
    // { ...AllSkills[4], lvl: 1 },
    // { ...AllSkills[5], lvl: 1 },
  ];

  const frontChar = [
    { ...AllSkills[1], lvl: 8 },
    { ...AllSkills[2], lvl: 8 },
    { ...AllSkills[3], lvl: 7 },
    { ...AllSkills[49], lvl: 3 },
    { ...AllSkills[26], lvl: 5 },
    { ...AllSkills[13], lvl: 7 },
    { ...AllSkills[4], lvl: 4 },
    { ...AllSkills[5], lvl: 6 },
    { ...AllSkills[8], lvl: 5 },
    { ...AllSkills[27], lvl: 3 },
    { ...AllSkills[23], lvl: 9 },
    { ...AllSkills[10], lvl: 5 },
  ];
  const rightChar = [
    { ...AllSkills[1], lvl: 9 },
    { ...AllSkills[2], lvl: 9 },
    { ...AllSkills[3], lvl: 9 },
    { ...AllSkills[4], lvl: 9 },
    { ...AllSkills[5], lvl: 9 },
    { ...AllSkills[6], lvl: 9 },
    { ...AllSkills[7], lvl: 9 },
    { ...AllSkills[8], lvl: 9 },
    { ...AllSkills[9], lvl: 9 },
    { ...AllSkills[10], lvl: 9 },
    { ...AllSkills[11], lvl: 9 },
    { ...AllSkills[12], lvl: 9 },
    { ...AllSkills[13], lvl: 9 },
    { ...AllSkills[14], lvl: 9 },
    { ...AllSkills[15], lvl: 9 },
    { ...AllSkills[16], lvl: 9 },
    { ...AllSkills[17], lvl: 9 },
    { ...AllSkills[18], lvl: 9 },
    { ...AllSkills[19], lvl: 9 },
    { ...AllSkills[20], lvl: 9 },
    { ...AllSkills[21], lvl: 9 },
    { ...AllSkills[22], lvl: 9 },
    { ...AllSkills[23], lvl: 9 },
    { ...AllSkills[24], lvl: 9 },
    { ...AllSkills[25], lvl: 9 },
    { ...AllSkills[26], lvl: 9 },
    { ...AllSkills[27], lvl: 9 },
    { ...AllSkills[28], lvl: 9 },
    { ...AllSkills[29], lvl: 9 },
    { ...AllSkills[30], lvl: 9 },
    { ...AllSkills[31], lvl: 9 },
    { ...AllSkills[32], lvl: 9 },
    { ...AllSkills[33], lvl: 9 },
    { ...AllSkills[34], lvl: 9 },
    { ...AllSkills[35], lvl: 9 },
    { ...AllSkills[36], lvl: 9 },
    { ...AllSkills[37], lvl: 9 },
    { ...AllSkills[38], lvl: 9 },
    { ...AllSkills[39], lvl: 9 },
    { ...AllSkills[40], lvl: 9 },
    { ...AllSkills[41], lvl: 9 },
    { ...AllSkills[42], lvl: 9 },
    { ...AllSkills[43], lvl: 9 },
    { ...AllSkills[44], lvl: 9 },
    { ...AllSkills[45], lvl: 9 },
    { ...AllSkills[46], lvl: 9 },
    { ...AllSkills[47], lvl: 9 },
    { ...AllSkills[48], lvl: 9 },
    { ...AllSkills[49], lvl: 9 },
    { ...AllSkills[50], lvl: 9 },
    { ...AllSkills[51], lvl: 9 },
    { ...AllSkills[52], lvl: 9 },
    { ...AllSkills[53], lvl: 9 },
    { ...AllSkills[54], lvl: 9 },
    { ...AllSkills[55], lvl: 9 },
    { ...AllSkills[56], lvl: 9 },
    { ...AllSkills[57], lvl: 9 },
    { ...AllSkills[58], lvl: 9 },
    { ...AllSkills[59], lvl: 9 },
    { ...AllSkills[60], lvl: 9 },
    { ...AllSkills[61], lvl: 9 },
    { ...AllSkills[62], lvl: 9 },
    { ...AllSkills[63], lvl: 9 },
    { ...AllSkills[64], lvl: 9 },
    { ...AllSkills[65], lvl: 9 },
    { ...AllSkills[66], lvl: 9 },
    { ...AllSkills[67], lvl: 9 },
    { ...AllSkills[68], lvl: 9 },
    { ...AllSkills[69], lvl: 9 },
  ];

  const skillsByCharacters = [[...leftChar], [...frontChar], [...rightChar]];

  const skillsStruct = (
    id: number,
    pos: number,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    //SCROLLING SKILLS TO THE TOP ON CHARACTER CHANGE
    if (skillCharCol0.current) skillCharCol0.current.scrollTop = 0;
    if (skillCharCol1.current) skillCharCol1.current.scrollTop = 0;
    if (skillCharCol2.current) skillCharCol2.current.scrollTop = 0;

    return (
      <div ref={ref} className={classes['skill-char-col']} data-character={pos}>
        <ul className={classes['skills-list']}>
          {skillsByCharacters[id].map(item => {
            {
              return <Skill2 key={item.id} skill={item} />;
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

          <p> frontend</p>
          <strong>character</strong>
        </div>
      </div>
    );
  };

  return (
    <div className={classes['skills-col']}>
      <div
        ref={skillsWindowRef}
        className={`card--glass ${classes['skills-window']} ${
          !props.onCtaButtonChange.clicked ? 'not-started' : ''
        } `}
      >
        <div
          className={`${classes['skills-text']} shine ${
            props.onCtaButtonChange.clicked ? classes['abs-up'] : ''
          }`}
        >
          <p>Choose</p>
          <p>and</p>
          <p>
            <strong className='shine'>level up</strong>
          </p>
          <p>your</p>
          <p>developer!</p>
        </div>
        <div
          className={`${classes['skills-card']} ${
            !props.onCtaButtonChange.clicked ? classes['abs-down'] : ''
          }`}
        >
          <header className={classes['skills-window__header']}>
            <div className={classes['skills-list-name']}>
              <h2>Skills</h2>
            </div>
            <div
              className={`${classes['character-level']}`}
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
                  {countLevel(leftChar)}
                </div>
                <div
                  className={classes['character-level__level-number']}
                  data-character={props.charStateData.frontChar}
                >
                  {countLevel(frontChar)}
                </div>
                <div
                  className={classes['character-level__level-number']}
                  data-character={props.charStateData.rightChar}
                >
                  {countLevel(rightChar)}
                </div>
              </div>
            </div>
          </header>
          <div
            ref={characerSkills}
            className={`${classes['character-skills']} `}
          >
            {leftChar.length !== 0
              ? skillsStruct(0, props.charStateData.leftChar, skillCharCol0)
              : charCreatorText(props.charStateData.leftChar)}
            {skillsStruct(1, props.charStateData.frontChar, skillCharCol1)}
            {skillsStruct(2, props.charStateData.rightChar, skillCharCol2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
