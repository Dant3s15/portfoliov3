import { useState, useContext } from 'react';
import classes from './Hero.module.scss';
import SelectedContext from '../../../context/selected-context';
import Characters from './Characters/Characters';
import SkillsList from './Skills/Skills';

const Hero = props => {
  const ctx = useContext(SelectedContext);
  const [selected, setSelected] = useState(false);

  const [charState, setCharState] = useState({}, cur => {
    console.log(cur);
  });
  const [ctaButtonClicked, setCtaButtonClicked] = useState('false');

  const charStateDataHandler = data => {
    setCharState(data);
  };

  const ctaDataButtonHandler = data => {
    setCtaButtonClicked(data);
    console.log(ctaButtonClicked);
  };

  const selectedStateHandler = selec => {
    setSelected(selec);
  };

  return (
    <section
      className={`${classes['section-hero']} ${
        !ctaButtonClicked.clicked ? classes.gray : ''
      }`}
    >
      <div className={classes['character-selection']}>
        <Characters
          onCtaButtonChange={ctaDataButtonHandler}
          onSelectedChange={selectedStateHandler}
          selectedState={ctx}
          charState={charStateDataHandler}
        ></Characters>
        <SkillsList
          className={classes['character-skills']}
          onCtaButtonChange={ctaButtonClicked}
          charStateData={charState}
          onReceivedSelectState={selected}
        ></SkillsList>
      </div>
    </section>
  );
};

export default Hero;
