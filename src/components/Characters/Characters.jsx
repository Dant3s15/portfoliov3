import { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';

const Characters = props => {
  const [leftChar, setLeftChar] = useState(0);
  const [frontChar, setFrontChar] = useState(1);
  const [rightChar, setRightChar] = useState(2);

  useEffect(() => {
    const charStateData = {
      leftChar,
      frontChar,
      rightChar,
    };
    props.onCharStateChange(charStateData);
  }, [leftChar, frontChar, rightChar]);

  // ********************************************************
  const calcCharWidth = () => {
    let characters = document.querySelector('.characters');
    let characterImgComputedWidth = parseInt(
      window.getComputedStyle(characters).width
    );
    let charactersComputedWith = characterImgComputedWidth * 0.4;

    let root = document.documentElement;
    root.style.setProperty('--characters-width', charactersComputedWith + 'px');
  };

  calcCharWidth();

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

  const rotateCharactersHandler = (e, gesture) => {
    const setChars = direc => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;
    let charData;
    if (!e === undefined) {
      charData = +e.target.dataset.character;
    } else charData = gesture;

    //TODO if===1
    if (charData === 1) {
      console.log('FRONT TODO');
    }

    if (charData === 0) {
      direc = 1;
      setChars(direc);
    }
    if (charData === 2) {
      direc = -1;
      setChars(direc);
    }
  };
  // *****************************************************
  //TODO handle swipe gestures
  let touchstartX = 0;
  let touchendX = 0;

  function debounce(func, timeout = 3000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

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
  const charactersEl = document.querySelector('.characters');
  charactersEl.addEventListener('swiped', function (e) {
    // console.log(e.target);
    if (e.detail.dir === 'right') rotateCharactersHandler(null, 0);
    if (e.detail.dir === 'left') rotateCharactersHandler(null, 2);
  });

  // charactersEl.addEventListener('touchstart', e => {
  //   touchstartX = e.changedTouches[0].screenX;
  // });

  // charactersEl.addEventListener('touchend', e => {
  //   touchendX = e.changedTouches[0].screenX;
  //   handleGesture();
  // });

  // *****************************************************

  const charactersRoot = document.getElementById('characters-root');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Character
          data={leftChar}
          name='Left'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>,
        charactersRoot
      )}
      {ReactDOM.createPortal(
        <Character
          data={frontChar}
          name='Front'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>,
        charactersRoot
      )}
      {ReactDOM.createPortal(
        <Character
          data={rightChar}
          name='Right'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>,
        charactersRoot
      )}
    </Fragment>
  );
};

export default Characters;
