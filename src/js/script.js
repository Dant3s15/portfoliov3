'use strict';
//TODO
//-calculate char height based on screen size
//TODO count level using front end map
//TODO add skills from drop down menu

//////////////
//Character change mechanic
//////////////
const characterEls = document.querySelectorAll('.character');
const characterColEl = document.querySelector('.character-col');
// const characterImgFrontEl = document.querySelector('.char__img--front');
const skillsWindow = document.querySelector('.skills-window');

const charPos = ['character__left', 'character__front', 'character__right'];
const charDataset = [0, 1, 2];

const wrapRotate = function (num, direc) {
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

const skillsList = document.querySelectorAll('.skills-list');
const characterList = document.querySelectorAll('.character');
const charLevelsList = document.querySelectorAll(
  '.character-level__level-number'
);

//Character rotation

let charL = document.querySelector('.character__left');
let charF = document.querySelector('.character__front');
let charR = document.querySelector('.character__right');

const reassignSides = () => {
  charL = document.querySelector('.character__left');
  charF = document.querySelector('.character__front');
  charR = document.querySelector('.character__right');
};

const rotateRight = () => {
  charL.classList.remove(charPos[0]);
  charL.classList.add(charPos[(0 + 2) % 3]);

  charF.classList.remove(charPos[1]);
  charF.classList.add(charPos[(1 - 1) % 3]);

  charR.classList.remove(charPos[2]);
  charR.classList.add(charPos[(2 - 1) % 3]);

  for (let i = 0; i < 3; i++) {
    const dataValue = +skillsList[i].getAttribute('data-character');
    skillsList[i].setAttribute('data-character', wrapRotate(dataValue, -1));
    characterList[i].setAttribute('data-character', wrapRotate(dataValue, -1));
    charLevelsList[i].setAttribute('data-character', wrapRotate(dataValue, -1));
  }
  reassignSides();
  removeSelected();
};

const rotateLeft = () => {
  charL.classList.remove(charPos[0]);
  charL.classList.add(charPos[(0 + 1) % 3]);

  charF.classList.remove(charPos[1]);
  charF.classList.add(charPos[(1 + 1) % 3]);

  charR.classList.remove(charPos[2]);
  charR.classList.add(charPos[(2 + 1) % 3]);

  for (let i = 0; i < 3; i++) {
    const dataValue = +skillsList[i].getAttribute('data-character');

    skillsList[i].setAttribute('data-character', wrapRotate(dataValue, 1));
    characterList[i].setAttribute('data-character', wrapRotate(dataValue, 1));
    charLevelsList[i].setAttribute('data-character', wrapRotate(dataValue, 1));
  }
  reassignSides();
  removeSelected();
};

// const removeSelected = () => {
//   charF.classList.remove('selected');
//   charL.classList.remove('selected');
//   charR.classList.remove('selected');
//   skillsWindow.classList.remove('selected--skills');
// };

// const charRotation = el => {
//   const clickedEl = el.target.parentElement;

//   charL = document.querySelector('.character__left');
//   charF = document.querySelector('.character__front');
//   charR = document.querySelector('.character__right');

//   //Adding selected state to character
//   if (
//     clickedEl.hasAttribute('data-character') == 1 &&
//     clickedEl.classList.contains('character__front') &&
//     !clickedEl.classList.contains('selected')
//   ) {
//     skillsWindow.classList.add('selected--skills');
//     charF.classList.toggle('selected');
//   } else {
//     skillsWindow.classList.remove('selected--skills');
//     removeSelected();
//   }

//   if (clickedEl.classList.contains('character__left')) {
//     rotateLeft();
//   }
//   if (clickedEl.classList.contains('character__right')) {
//     rotateRight();
//   }
// };

// characterColEl.addEventListener('click', el => {
//   charRotation(el);
// });

//disabled blue outline
characterColEl.ondragstart = () => {
  return false;
};

const skillsWindowEl = document.querySelector('.skills-window');

/****************** */
//Cta hide
/****************** */
const characterOverlayEl = document.querySelector('.character__overlay');
const characterSkillsEl = document.querySelector('.character-skills');
const characterOverlay = document.querySelector('.character__overlay');
const skillsWindowHeader = document.querySelector('.skills-window__header');
const charactersEl = document.querySelector('.characters');
const buttonEl = document.querySelector('.cta__button');
const skillsText = document.querySelector('.skills-text');
const skillsCard = document.querySelector('.skills-card');

buttonEl.addEventListener('click', () => {
  characterOverlayEl.classList.toggle('character__overlay--hidden');
  charactersEl.classList.toggle('hidden');
  skillsWindowEl.classList.toggle('not-started');
  skillsCard.classList.toggle('abs-down');
  skillsText.classList.toggle('abs-up');
  // calcCharWidth();
});

//calculate characters width
let sideChar = document.querySelector('.char__img--right');

// const calcCharWidth = () => {
//   let characterImgComputedWidth = parseInt(
//     window.getComputedStyle(sideChar).width
//   );
//   // console.log(sideChar);

//   let charactersComputedWith =
//     parseInt(window.getComputedStyle(charactersEl).width) / 2 -
//     characterImgComputedWidth / 2;

//   // console.log(characterImgComputedWidth);

//   let root = document.documentElement;
//   root.style.setProperty('--characters-width', charactersComputedWith + 'px');
// };

// trigger calculation function on window resize
// window.addEventListener('resize', calcCharWidth);

// console.log(sideChar);

// Character swipe rotation
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

charactersEl.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

charactersEl.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;

  handleGesture();
});

//Mouse swipe handler
let dragging = false;
const onMouseDown = () => {
  dragging = true;
};
let mouseMovementX = 0;

const onMouseMove = e => {
  if (!dragging) return;
  mouseMovementX = e.movementX;
};

const onMouseUp = e => {
  if (Math.abs(mouseMovementX) > 1) {
    if (mouseMovementX > 0) rotateRight();
    if (mouseMovementX < 0) rotateLeft();
  }
  dragging = false;
};

const heroSection = document.querySelector('.section-hero');

// calcCharWidth();

/****************** */
//Hamburger button handling
/****************** */

const headerWrapperEl = document.querySelector('.header-wrapper');
const hamburgerButtonEl = document.querySelector('.hamburger-button');
const hamburgerIconEl = document.querySelector('.hamburger-icon');
const closeIconEl = document.querySelector('.close-icon');

hamburgerButtonEl.addEventListener('click', () => {
  headerWrapperEl.classList.toggle('hamburger-active');
  headerWrapperEl.classList.toggle('hamburger-not-active');
  hamburgerIconEl.classList.toggle('hidden-btn');
  closeIconEl.classList.toggle('hidden-btn');
  // hamburgerIconEl.classList.toggle('visible-btn');
  closeIconEl.classList.toggle('visible-btn');
});
