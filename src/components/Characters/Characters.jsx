import { useState, useEffect, useRef } from 'react';

import classes from './Characters.module.scss';
import Character from './Character';

const Characters = props => {
  const [leftChar, setLeftChar] = useState(0);
  const [frontChar, setFrontChar] = useState(1);
  const [rightChar, setRightChar] = useState(2);
  const [selected, setSelected] = useState(false);
  const [ctaButtonClicked, setCtaButton] = useState('false');
  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });

  // useEffect(() => {
  //   if (ctaButtonClicked) props.onCtaButtonChange(ctaButtonClicked);
  //   // return () => {
  //   //   props.onCtaButtonChange(ctaButtonClicked);
  //   // };
  // }, [ctaButtonClicked]);

  const ctaButtonHandler = () => {
    console.log('click');
    if (!ctaButtonClicked) setCtaButton(true);
    else setCtaButton(false);
    calcCharWidth();
    props.onCtaButtonChange({ clicked: true });
    //disabling blue outline on drag
    charactersColRef.current.ondragstart = () => {
      return;
    };
  };

  const charactersRef = useRef();
  const charactersColRef = useRef();

  const charStateDataHandler = data => {
    setCharState(data);
    return charState;
  };

  useEffect(() => {
    const charStateData = {
      leftChar,
      frontChar,
      rightChar,
    };
    charStateDataHandler(charStateData);
    // props.onCharStateChange(charStateData);
  }, [leftChar, frontChar, rightChar]);
  // useEffect(() => {
  //   const charStateData = {
  //     leftChar,
  //     frontChar,
  //     rightChar,
  //   };
  //   charStateDataHandler(charStateData);
  //   // props.onCharStateChange(charStateData);
  // }, [leftChar, frontChar, rightChar]);
  //TODO VVV
  useEffect(() => {
    if (selected) {
      document
        .querySelector('.skills-window')
        .classList.add('selected--skills');
    } else {
      document
        .querySelector('.skills-window')
        .classList.remove('selected--skills');
    }
  }, [selected]);

  // useEffect(() => {
  //   if (ctaButtonClicked) {
  //     props.onCtaButtonChange(ctaButtonClicked);
  //   }
  // }, [ctaButtonClicked]);

  // ********************************************************
  const calcCharWidth = () => {
    let characterImgComputedWidth = parseInt(
      window.getComputedStyle(charactersRef.current).width
    );
    let charactersComputedWith = characterImgComputedWidth * 0.4;

    let root = document.documentElement;
    root.style.setProperty('--characters-width', charactersComputedWith + 'px');
  };

  window.addEventListener('resize', calcCharWidth);

  // ********************************************************

  const wrapRotate = function (num, direc = -1) {
    if (direc == 1) {
      return (num + 1) % 3;
    }

    if (direc == -1) {
      if (num == 0) {
        return num + 2;
      }
      return (num - 1) % 3;
    }
  };

  // *****************************************************
  const rotateCharactersHandler = e => {
    const setChars = direc => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;
    let charData = +e.target.dataset.character;

    if (charData === 1) {
      setSelected(true);
    }

    if (charData === 0) {
      direc = 1;
      setChars(direc);
      setSelected(false);
    }
    if (charData === 2) {
      direc = -1;
      setChars(direc);
      setSelected(false);
    }
  };
  // *****************************************************
  //TODO handle swipe gestures
  // let touchstartX = 0;
  // let touchendX = 0;

  // function debounce(func, timeout = 3000) {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, timeout);
  //   };
  // }

  // function checkSwipeDirection() {
  //   if (Math.abs(touchendX - touchstartX) > 50) {
  //     if (touchendX < touchstartX) {
  //       // rotateCharactersHandler();
  //       rotateCharactersHandler(null, 2);
  //       // console.log('rotate right');
  //     }
  //     if (touchendX > touchstartX) {
  //       // rotateLeft();
  //       rotateCharactersHandler(null, 0);
  //       // console.log('rotate left');
  //     }
  //   }
  // }

  // function handleGesture() {
  //   // console.log('handling');
  //   if (touchendX < touchstartX) rotateCharactersHandler(null, 0);
  //   if (touchendX > touchstartX) rotateCharactersHandler(null, 2);
  // }
  //TODO fix swipe endless loop
  // const charactersEl = document.querySelector('.characters');
  // charactersEl.addEventListener('swiped', function (e) {
  //   // console.log(e.target);
  //   rotateCharactersHandler(e);
  // });

  // charactersEl.addEventListener('touchstart', e => {
  //   touchstartX = e.changedTouches[0].screenX;
  // });

  // charactersEl.addEventListener('touchend', e => {
  //   touchendX = e.changedTouches[0].screenX;
  //   handleGesture();
  // });

  // *****************************************************

  // const charactersRoot = document.getElementById('characters-root');

  // console.log((frontChar === 1) & selected, 'check');
  let leftIsSelected = (leftChar === 1) & selected;
  let frontIsSelected = (frontChar === 1) & selected;
  let rightIsSelected = (rightChar === 1) & selected;

  return (
    <div ref={charactersColRef} className={classes['character-col']}>
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
            <div className={classes['cta__button--text']}>Select player</div>
          </button>
          <div className={`${classes['cta__text']}  shine`}>
            And let your adventure begin...
          </div>
        </div>
      </div>

      <div
        ref={charactersRef}
        className={`${classes.characters} ${
          ctaButtonClicked ? classes.hidden : ''
        }`}
      >
        <Character
          data={leftChar}
          selected={leftIsSelected}
          name='Left'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>

        <Character
          data={frontChar}
          selected={frontIsSelected}
          name='Front'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>

        <Character
          selected={rightIsSelected}
          data={rightChar}
          name='Right'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>
      </div>
    </div>
  );
};

export default Characters;
