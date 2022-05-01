import { useState, useEffect, useRef, useContext, FC } from 'react';
import Character from './Character';
import SelectedContext from '../../../../context/selected-context';
import ButtonBig from '../../../UI/ButtonBig';
import Typewriter from 'typewriter-effect';
import classes from './Characters.module.scss';

interface Props {
  onCtaButtonChange: any;
  // onSelectedChange?: (selec: any) => void;
  selectedState: any;
  charState: (data: any) => void;
  heroRef: React.MutableRefObject<null>;
}

const Characters: FC<Props> = props => {
  // console.log(props);
  const [leftChar, setLeftChar] = useState(0);
  const [frontChar, setFrontChar] = useState(1);
  const [rightChar, setRightChar] = useState(2);
  const [ctaButtonClicked, setCtaButton] = useState({ clicked: false });
  const ctx = useContext(SelectedContext);

  const charactersRef = useRef<HTMLDivElement>(null);
  const charactersColRef = useRef<HTMLDivElement>(null);

  const ctaButtonHandler = () => {
    if (!ctaButtonClicked.clicked) {
      setCtaButton({ clicked: true });
    } else setCtaButton({ clicked: false });
    calcCharWidth();
    props.onCtaButtonChange({ clicked: true });
    // console.log(ctaButtonClicked);
    //disabling blue outline on drag
    if (charactersColRef?.current) {
      charactersColRef.current.ondragstart = () => {
        return false;
      };
    }
  };

  // useEffect(() => {
  //   if (ctx.event) {
  //     console.log(ctx.event);
  //     rotateCharactersHandler(ctx.event);
  //   }
  //   // return () => {
  //   //   // let char1 = document
  //   //   //   .querySelector('[data-const-pos="1"]')
  //   //   //   ?.getAttribute('data-character');
  //   // };
  // }, [ctx.event]);

  useEffect(() => {
    const charStateData = {
      leftChar,
      frontChar,
      rightChar,
    };

    props.charState && props.charState(charStateData);
  }, [leftChar, frontChar, rightChar]);

  const CONST_POS = [0, 1, 2];

  // ********************************************************
  const debounce = (func: Function, timeout = 300) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const calcCharWidth = () => {
    let characterImgComputedWidth: number;
    let charactersComputedWith: number;
    if (charactersRef.current) {
      characterImgComputedWidth = charactersRef.current.offsetWidth;
      charactersComputedWith = characterImgComputedWidth * 0.4;
      let root = document.documentElement;
      root.style.setProperty(
        '--characters-width',
        charactersComputedWith + 'px'
      );
    }
  };
  const processChange = debounce(calcCharWidth, 1000);

  window.addEventListener('resize', processChange);

  // ********************************************************

  const wrapRotate = function (num: number, direc = -1) {
    if (direc == 1) {
      return (num + 1) % 3;
    }

    if (direc == -1) {
      if (num == 0) {
        return num + 2;
      }
      return (num - 1) % 3;
    } else return 0;
  };

  // *****************************************************
  const renderContentHandler = (constPos: number) => {
    props.selectedState?.setWhichSelected(constPos);
  };

  ctx.rotateCharactersHandler = (e: any) => {
    const setChars = (direc: number) => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;

    let charData;
    if (typeof e === 'number') {
      charData = e;
    } else charData = +e.target?.dataset.character;

    // console.log(charData);
    let charConstPos = +e.target?.dataset.constPos;
    // console.log(charData);
    if (charData === 1) {
      props.selectedState.setSelected(true);

      renderContentHandler(charConstPos);
    }

    if (charData === 0) {
      direc = 1;
      setChars(direc);
      props.selectedState.setSelected(true);
      // renderContentHandler(null);
      renderContentHandler(charConstPos);

      ctx.setRenderSection(false);
    }
    if (charData === 2) {
      direc = -1;
      setChars(direc);
      props.selectedState.setSelected(true);
      // renderContentHandler(null);
      renderContentHandler(charConstPos);
      ctx.setRenderSection(false);
    }
    //disable selected if background is clicked
    if (e.target === charactersRef.current) {
      // console.log(e.target);
      props.selectedState.setSelected(false);
      renderContentHandler(0);
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
  let leftIsSelected = leftChar === 1 && props.selectedState.isSelected;
  let frontIsSelected = frontChar === 1 && props.selectedState.isSelected;
  let rightIsSelected = rightChar === 1 && props.selectedState.isSelected;

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
          ctaButtonClicked.clicked ? classes['character__overlay--hidden'] : ''
        }`}
      >
        <div className={classes.cta}>
          <ButtonBig
            isAbsolute={false}
            onClick={ctaButtonHandler}
            text='Choose your dev'
          ></ButtonBig>
          <div className={`${classes['cta__text']}`}>
            <Typewriter
              options={{
                loop: true,
                delay: 100,
                cursor: '',
                // cursorClassName: classes['cta__text'],
              }}
              onInit={typewriter => {
                typewriter
                  .typeString('Create')
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString('Level Up')
                  .pauseFor(4000)
                  .deleteAll()
                  .start();
              }}
            />
            <span className={classes['your-dev']}>your Dev</span>
          </div>
        </div>
      </div>

      <div
        ref={charactersRef}
        onClick={ctx.rotateCharactersHandler}
        className={`${classes.characters} ${
          !ctaButtonClicked.clicked ? classes.hidden : ''
        }`}
      >
        {isAnythingSelected().isSelected ? (
          <ButtonBig
            onClick={frontCharButtonHandler}
            // animate={true}
            moveTo={isAnythingSelected().moveTo}
            isAbsolute={true}
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
          onRotateCharacters={ctx.rotateCharactersHandler}
        ></Character>

        <Character
          // ref={frontCharRef}
          dataConstPos={CONST_POS[1]}
          data={frontChar}
          selected={frontIsSelected}
          name='Damian'
          onRotateCharacters={ctx.rotateCharactersHandler}
        ></Character>

        <Character
          // ref={rightCharRef}
          dataConstPos={CONST_POS[2]}
          selected={rightIsSelected}
          data={rightChar}
          name='Future Damian'
          onRotateCharacters={ctx.rotateCharactersHandler}
        ></Character>
      </div>
    </div>
  );
};

export default Characters;
