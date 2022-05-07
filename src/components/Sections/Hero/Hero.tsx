import { useState, useContext, FC } from 'react';
import classes from './Hero.module.scss';
import SelectedContext from '../../../context/selected-context';
import Characters from './Characters/Characters';
import SkillsList from './Skills/Skills';
import { useRef } from 'react';

const Hero: FC = props => {
  const ctx = useContext(SelectedContext);
  const heroRef = useRef(null);

  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });
  const [ctaButtonClicked, setCtaButtonClicked] = useState({ clicked: false });

  const init = () => {
    ctx.ctaButtonClicked = ctaButtonClicked;
    ctx.setCtaButtonClicked = setCtaButtonClicked;
  };
  init();

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
      ctx.setSelected(false);
      ctx.setRenderSection(false);
    }
  };

  return (
    <section
      id='hero'
      ref={heroRef}
      onClick={heroOnClickHandler}
      className={`${classes['section-hero']} ${
        !ctaButtonClicked.clicked ? classes.gray : ''
      }`}
    >
      <div className={classes['character-selection']}>
        <Characters
          heroRef={heroRef}
          selectedState={ctx}
          charState={charStateDataHandler}
        ></Characters>
        <SkillsList
          className={classes['character-skills']}
          charStateData={charState}
        ></SkillsList>
      </div>
    </section>
  );
};

export default Hero;
