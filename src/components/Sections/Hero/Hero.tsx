import { useState, useContext, FC } from 'react';
import classes from './Hero.module.scss';
import SelectedContext from '../../../context/selected-context';
import Characters from './Characters/Characters';
import SkillsList from './Skills/Skills';

const Hero: FC = props => {
  const ctx = useContext(SelectedContext);
  // const [selected, setSelected] = useState(false);

  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });
  const [ctaButtonClicked, setCtaButtonClicked] = useState({ clicked: false });

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

  // const selectedStateHandler = (selec: any) => {
  //   setSelected(selec);
  //   console.log(selec);
  // };

  return (
    <section
      className={`${classes['section-hero']} ${
        !ctaButtonClicked.clicked ? classes.gray : ''
      }`}
    >
      <div className={classes['character-selection']}>
        <Characters
          onCtaButtonChange={ctaDataButtonHandler}
          // onSelectedChange={selectedStateHandler}
          selectedState={ctx}
          charState={charStateDataHandler}
        ></Characters>
        <SkillsList
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