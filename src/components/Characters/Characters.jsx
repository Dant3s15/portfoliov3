import { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';

const Characters = props => {
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

  const wrapRotate = function (num, direc = -1) {
    // console.log(CharDataCtx);
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

  const rotateCharactersHandler = e => {
    const setChars = direc => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;

    //TODO if===1
    if (+e.target.dataset.character === 1) {
      console.log('FRONT TODO');
    }

    if (+e.target.dataset.character === 0) {
      direc = 1;
      setChars(direc);
    }
    if (+e.target.dataset.character === 2) {
      direc = -1;
      setChars(direc);
    }
  };
  //TODO handle swipe gestures
  let touchstartX = 0;
  let touchendX = 0;

  function handleGesture() {
    if (Math.abs(touchendX - touchstartX) > 50) {
      if (touchendX < touchstartX) {
        rotateRight();
      }
      if (touchendX > touchstartX) {
        rotateLeft();
      }
    }
  }
  const charactersEl = document.querySelector('.characters');

  charactersEl.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  charactersEl.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;

    handleGesture();
  });

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
