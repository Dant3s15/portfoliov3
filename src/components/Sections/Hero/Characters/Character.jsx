// import ButtonBig from '../../../UI/ButtonBig';
import classes from './Character.module.scss';
import characterImage from '../../../../resources/img/character.png';
const Character = props => {
  const whichSide = data => {
    if (data === 0) return 'left';
    if (data === 1) return 'front';
    if (data === 2) return 'right';
  };

  // const charRef = useRef(null);
  // console.log(charRef);
  const curChar = classes[`character__${whichSide(props.data)}`];

  return (
    <div
      // ref={charRef}
      className={`${classes.character} ${curChar} ${
        props.selected ? classes.selected : ''
      }`}
      onClick={e => {
        props.onRotateCharacters(e);
      }}
    >
      <div className={classes.character__name}>
        {props.name}
        {props.data}
      </div>
      <img
        data-const-pos={props.dataConstPos}
        data-character={props.data}
        src={characterImage}
        alt='character image'
      />
    </div>
  );
};

export default Character;
