// import ButtonBig from '../../../UI/ButtonBig';
import classes from './Character.module.scss';
import characterImage from '../../../../resources/img/character.png';
import { Link } from 'react-router-dom';

interface Props {
  dataConstPos?: number;
  data?: number | string;
  selected?: boolean;
  name: string;
  onRotateCharacters: (e: any) => void;
  selectedCtx?: boolean;
  // moveTo: string;
}
const Character = (props: Props) => {
  const whichSide = (data: number | string): string | undefined => {
    let side = +data;
    if (side === 0) return 'left';
    if (side === 1) return 'front';
    if (side === 2) return 'right';
  };

  const getMoveTo = (charNumb: number | undefined) => {
    if (charNumb === 0) {
      return 'creator';
    }
    if (charNumb === 1) {
      return 'about-me';
    }
    if (charNumb === 2) {
      return '/';
    }
    return '/';
  };

  const curChar = classes[`character__${whichSide(props.data!)}`];

  return (
    <div
      // to={getMoveTo(props?.dataConstPos)}
      className={`${classes.character} ${curChar ? curChar : ''} ${
        props.selected ? classes.selected : ''
      } ${!props.selectedCtx ? '' : classes.blured}`}
      onClick={e => {
        props.onRotateCharacters(e);
      }}
    >
      <div className={classes.character__name}>{props.name}</div>
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
