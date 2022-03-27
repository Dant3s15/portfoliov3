import { useState } from 'react';
import classes from './Character.module.scss';
import characterImage from '../../resources/img/character.png';
const Character = props => {
  const whichSide = data => {
    if (data === 0) return 'left';
    if (data === 1) return 'front';
    if (data === 2) return 'right';
  };

  // const [selected, setSelected] = useState(false);

  const curChar = classes[`character__${whichSide(props.data)}`];
  //TODO unset selected when clicked on different char
  return (
    <div
      className={`${classes.character} ${curChar} ${
        props.selected ? classes.selected : ''
      }`}
      onClick={e => {
        console.log(props.data);
        props.onRotateCharacters(e);
        if (props.data === 1) {
          console.log('im front');
        }
        //   props.setSelected(true);
        // }
        //   setSelected(true);
        // } else setSelected(false);
      }}
    >
      <div className={classes.character__name}>
        {props.name}
        {props.data}
      </div>
      <img
        data-character={props.data}
        src={characterImage}
        alt='character image'
      />
    </div>
  );
};

export default Character;
