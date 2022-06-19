import { useState, useContext, FC, useEffect } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import classes from './Hero.module.scss';
import SelectedContext from '../../../context/selected-context';
import HeroVisibleContext from '../../../context/hero-visible-context';
import Characters from './Characters/Characters';
import SkillsList from './Skills/Skills';
import { useRef } from 'react';
import { skillInterface } from '../../../Types/types';
import { motion } from 'framer-motion';
interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}

const Hero: FC<Props> = props => {
  // const [heroIsVisible, setHeroIsVisible] = useState(false);
  const ctx = useContext(SelectedContext);
  const heroVisibleCtx = useContext(HeroVisibleContext);
  const heroRef = useRef(null);
  const entry = useIntersectionObserver(heroRef, {
    threshold: 0.7,
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      heroVisibleCtx.setHeroIsVisible(true);
    } else heroVisibleCtx.setHeroIsVisible(false);
    // console.log(heroVisibleCtx.heroIsVisible);
    // ctx.heroIsVisible = heroIsVisible;
  }, [isVisible]);

  // heroVisibleCtx?.setHeroIsVisible(isVisible);
  // console.log(heroVisibleCtx, isVisible);

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
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
