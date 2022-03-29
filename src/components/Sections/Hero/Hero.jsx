import { useState } from 'react';
import classes from './Hero.module.scss';

import Characters from '../../Characters/Characters';

const Hero = props => {
  const [ctaButtonClicked, setCtaButton] = useState('false');
  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });

  const charStateDataHandler = data => {
    setCharState(data);
    return charState;
  };

  // const ctaButtonHandler = () => {
  //   if (!ctaButtonClicked) setCtaButton(true);
  //   else setCtaButton(false);
  // };

  return (
    <section className={classes['section-hero']}>
      <div className={classes['character-selection']}>
        {/* <div className={classes['character-col']}>
          <div
            className={`${classes['character__overlay']} ${
              !ctaButtonClicked ? classes['character__overlay--hidden'] : ''
            }`}
          >
            <div className={classes.cta}>
              <button
                className={`${classes.cta__button} card--glass`}
                onClick={ctaButtonHandler}
              >
                <div className={classes['cta__button--text']}>
                  Select player
                </div>
              </button>
              <div className={`${classes['cta__text']}  shine`}>
                And let your adventure begin...
              </div>
            </div>
          </div>
        </div> */}
        <Characters
          onCharStateChange={charStateDataHandler}
          onCtaButtonClick={ctaButtonClicked}
        ></Characters>
        <div className={classes['skills-col']}>
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
              <div id='skills-root' className={classes['character-skills']}>
                {' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
