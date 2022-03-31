import { useState } from 'react';
import classes from './Hero.module.scss';

import Characters from '../../Characters/Characters';
import SkillsList from '../../Skills/Skills';

const Hero = props => {
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
  };

  const selectedStateHandler = selec => {
    setSelected(selec);
  };

  return (
    <section className={classes['section-hero']}>
      <div className={classes['character-selection']}>
        <Characters
          onCtaButtonChange={ctaDataButtonHandler}
          onSelectedChange={selectedStateHandler}
          selectedState={selected}
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
