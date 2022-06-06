import { useState, useContext, FC } from 'react';
import classes from './Hero.module.scss';
import SelectedContext from '../../../context/selected-context';
import Characters from './Characters/Characters';
import SkillsList from './Skills/Skills';
import { useRef } from 'react';
import { skillInterface } from '../../../Types/types';
import { motion } from 'framer-motion';

// import skillsdb from './skills.json';
interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}

const Hero: FC<Props> = props => {
  const ctx = useContext(SelectedContext);
  const heroRef = useRef(null);

  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });

  const charStateDataHandler = (data: {
    leftChar: number;
    frontChar: number;
    rightChar: number;
  }) => {
    setCharState(data);
  };

  const heroOnClickHandler = (e: {
    stopPropagation: () => void;
    target: any;
  }) => {
    e.stopPropagation();
    if (e.target.classList.contains(classes['section-hero'])) {
      ctx.setSelected?.(false);
      // ctx.setWhichSelected?.(2)
      // ctx.setCtaButtonClicked?.({ clicked: false });
      // ctx.setWhichSelected?.(0);
      // ctx.setRenderSection?.(false);
    }
  };

  // const getSkills = () => {
  //   skillsdb.forEach(skill => {
  //     console.log(skill.name);
  //     console.log(
  //       `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name}/${skill.name}-original.svg`
  //     );
  //   });
  // };
  // // console.log(skillsdb);
  // getSkills();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={{ duration: 1 }}
      id='hero'
      ref={heroRef}
      onClick={heroOnClickHandler}
      className={`${classes['section-hero']} ${
        !ctx.ctaButtonClicked?.clicked ? classes.gray : ''
      }`}
    >
      <div className={classes['character-selection']}>
        <Characters
          heroRef={heroRef}
          charState={charStateDataHandler}
        ></Characters>
        <SkillsList
          isLoading={props.isLoading}
          className={classes['character-skills']}
          charStateData={charState}
          allSkillsData={props.allSkillsData}
        ></SkillsList>
      </div>
    </motion.section>
  );
};

export default Hero;
