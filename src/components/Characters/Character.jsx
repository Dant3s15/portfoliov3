// import { useState } from 'react';
import classes from './Character.module.scss';
const Character = props => {
  const whichSide = data => {
    if (data === 0) return 'left';
    if (data === 1) return 'front';
    if (data === 2) return 'right';
  };

  const curChar = classes[`character__${whichSide(props.data)}`];

  return (
    <div
      className={`${classes.character} ${curChar}`}
      onClick={e => props.onRotateCharacters(e)}
    >
      <div className={classes.character__name}>
        {props.name}
        {props.data}
      </div>
      <img
        data-character={props.data}
        src='/src/resources/img/character.png'
        alt='character image'
      />
    </div>
  );
};

export default Character;
