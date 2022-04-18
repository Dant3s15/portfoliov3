import { useState, useEffect, useRef, useContext } from 'react';
import Character from './Character';
import SelectedContext from '../../../../context/selected-context';
import ButtonBig from '../../../UI/ButtonBig';
import classes from './Characters.module.scss';

const Characters = props => {
  const [leftChar, setLeftChar] = useState(0);
  const [frontChar, setFrontChar] = useState(1);
  const [rightChar, setRightChar] = useState(2);
  const [ctaButtonClicked, setCtaButton] = useState('false');
  const ctx = useContext(SelectedContext);

  const ctaButtonHandler = () => {
    if (!ctaButtonClicked) setCtaButton(true);
    else setCtaButton(false);
    calcCharWidth();
    props.onCtaButtonChange({ clicked: ctaButtonClicked });
    //disabling blue outline on drag
    charactersColRef.current.ondragstart = () => {
      return false;
    };
  };

  const charactersRef = useRef(null);
  const charactersColRef = useRef(null);

  useEffect(() => {
    const charStateData = {
      leftChar,
      frontChar,
      rightChar,
    };

    props.charState(charStateData);
  }, [leftChar, frontChar, rightChar]);

  const CONST_POS = [0, 1, 2];

  // ********************************************************
  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const processChange = debounce(() => calcCharWidth());

  const calcCharWidth = () => {
    let characterImgComputedWidth;
    if (charactersRef.current) {
      characterImgComputedWidth = charactersRef.current.offsetWidth;
    }
    let charactersComputedWith = characterImgComputedWidth * 0.4;

    let root = document.documentElement;
    root.style.setProperty('--characters-width', charactersComputedWith + 'px');
  };

  window.addEventListener('resize', processChange);

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
  const renderContentHandler = constPos => {
    props.selectedState.setWhichSelected(constPos);
  };

  const rotateCharactersHandler = e => {
    const setChars = direc => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;
    let charData = +e.target.dataset.character;

    if (charData === 1) {
      props.selectedState.setSelected(true);

      renderContentHandler(+e.target.dataset.constPos);
    }

    if (charData === 0) {
      direc = 1;
      setChars(direc);
      props.selectedState.setSelected(true);
      renderContentHandler(null);
      ctx.setRenderSection(false);
    }
    if (charData === 2) {
      direc = -1;
      setChars(direc);
      props.selectedState.setSelected(true);
      renderContentHandler(null);
      ctx.setRenderSection(false);
    }
    if (e.target === charactersRef.current) {
      props.selectedState.setSelected(false);
      renderContentHandler(null);
      ctx.setRenderSection(false);
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
  let leftIsSelected = (leftChar === 1) & props.selectedState.isSelected;
  let frontIsSelected = (frontChar === 1) & props.selectedState.isSelected;
  let rightIsSelected = (rightChar === 1) & props.selectedState.isSelected;

  // console.log(leftIsSelected, frontIsSelected, rightIsSelected);
  const isAnythingSelected = () => {
    if (leftIsSelected) {
      return { isSelected: true, text: 'Create character', moveTo: 'creator' };
    }
    if (frontIsSelected) {
      return { isSelected: true, text: 'Level me up', moveTo: 'about-me' };
    }
    if (rightIsSelected) {
      return { isSelected: true, text: 'Character Locked', greyedOut: true };
    } else return { isSelected: false };
  };

  const frontCharButtonHandler = () => {
    ctx.setRenderSection(true);
  };

  return (
    <div ref={charactersColRef} className={classes['character-col']}>
      <div
        className={`${classes['character__overlay']} ${
          !ctaButtonClicked ? classes['character__overlay--hidden'] : ''
        }`}
      >
        <div className={classes.cta}>
          <ButtonBig
            isAbsolute={false}
            onClick={ctaButtonHandler}
            text='Select Character'
          ></ButtonBig>
          <div className={`${classes['cta__text']}  shine`}>
            And let your adventure begin...
          </div>
        </div>
      </div>

      <div
        ref={charactersRef}
        onClick={rotateCharactersHandler}
        className={`${classes.characters} ${
          ctaButtonClicked ? classes.hidden : ''
        }`}
      >
        {isAnythingSelected().isSelected ? (
          <ButtonBig
            onClick={frontCharButtonHandler}
            // animate={true}
            moveTo={isAnythingSelected().moveTo}
            isAbsolute={{ isAbsolute: true }}
            text={isAnythingSelected().text}
            isGreyedOut={isAnythingSelected().greyedOut}
          ></ButtonBig>
        ) : (
          ''
        )}
        <Character
          // ref={leftCharRef}
          dataConstPos={CONST_POS[0]}
          data={leftChar}
          selected={leftIsSelected}
          name='Character Creator'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>

        <Character
          // ref={frontCharRef}
          dataConstPos={CONST_POS[1]}
          data={frontChar}
          selected={frontIsSelected}
          name='Damian'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>

        <Character
          // ref={rightCharRef}
          dataConstPos={CONST_POS[2]}
          selected={rightIsSelected}
          data={rightChar}
          name='Future Damian'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>
      </div>
    </div>
  );
};

export default Characters;
