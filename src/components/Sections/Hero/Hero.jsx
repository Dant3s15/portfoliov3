import { useState, useEffect } from 'react';
import classes from './Hero.module.scss';

import Characters from '../../Characters/Characters';
import SkillsList from '../../Skills/Skills';

const Hero = props => {
  const [selected, setSelected] = useState(false);

  const [charState, setCharState] = useState({}, cur => {
    console.log(cur);
  });
  const [ctaButtonClicked, setCtaButtonClicked] = useState('false');
  // const [ctaButtonClicked, setCtaButton] = useState('false');
  // const [charState, setCharState] = useState({
  //   leftChar: 0,
  //   frontChar: 1,
  //   rightChar: 2,
  // });

  // const charStateDataHandler = data => {
  //   setCharState(data);
  //   return charState;
  // };

  // useEffect(() => {
  //   console.log('test');
  //   // return () => {
  //   //   if (ctaButtonClicked) console.log(ctaButtonClicked);
  //   // };
  // }, [ctaButtonClicked]);

  const charStateDataHandler = data => {
    // setCharState(data);
    // return charState;
    setCharState(data);
    // console.log(charState);
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
        {/* <div className={classes['skills-col']}>
          <div
            className={`card--glass ${classes['skills-window']} not-started`}
          >
            <div className={`${classes['skills-text']} shine`}>
              <p>Choose</p>
              <p>and</p>
              <p>
                <strong className='shine'> level up</strong>
              </p>
              <p>your</p>
              <p>developer!</p>
            </div>
            <div className={`${classes['skills-card']} abs-down`}>
              <header className={classes['skills-window__header']}>
                <div className={classes['skills-list-name']}>
                  <h2>Skills</h2>
                </div>
                <div className={classes['character-level']}>
                  <div className={classes['character-level__level-title']}>
                    level
                  </div>
                  <div className={classes['character-levels']}>
                    <div
                      className={classes['character-level__level-number']}
                      data-character='0'
                    >
                      111
                    </div>
                    <div
                      className={classes['character-level__level-number']}
                      data-character='1'
                    >
                      222
                    </div>
                    <div
                      className={classes['character-level__level-number']}
                      data-character='2'
                    >
                      333
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
