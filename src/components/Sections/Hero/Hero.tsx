import { useState, useContext, FC } from 'react';
import classes from './Hero.module.scss';
import SelectedContext from '../../../context/selected-context';
import Characters from './Characters/Characters';
import SkillsList from './Skills/Skills';
import { useRef } from 'react';

const Hero: FC = props => {
  const ctx = useContext(SelectedContext);
  const heroRef = useRef(null);
  // const [selected, setSelected] = useState(false);

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
    // console.log(data);
    setCharState(data);
  };

  const ctaDataButtonHandler = (data: { clicked: boolean }) => {
    setCtaButtonClicked(data);
    // console.log(data);
  };

  const heroOnClickHandler = (e: {
    stopPropagation: () => void;
    target: any;
  }) => {
    e.stopPropagation();
    // console.log(e.target.classList.contains(classes['section-hero']));
    if (e.target.classList.contains(classes['section-hero'])) {
      // console.log(ctx);
      ctx.setSelected(false);
      ctx.setRenderSection(false);
    }
  };
  // const selectedStateHandler = (selec: any) => {
  //   setSelected(selec);
  //   console.log(selec);
  // };

  return (
    <section
      ref={heroRef}
      onClick={heroOnClickHandler}
      className={`${classes['section-hero']} ${
        !ctaButtonClicked.clicked ? classes.gray : ''
      }`}
    >
      <div className={classes['character-selection']}>
        <Characters
          heroRef={heroRef}
          onCtaButtonChange={ctaDataButtonHandler}
          // onSelectedChange={selectedStateHandler}
          selectedState={ctx}
          charState={charStateDataHandler}
        ></Characters>
        <SkillsList
          // heroRef={heroRef}
          className={classes['character-skills']}
          onCtaButtonChange={ctaButtonClicked}
          charStateData={charState}
          // onReceivedSelectState={selected}
        ></SkillsList>
      </div>
    </section>
  );
};

export default Hero;
