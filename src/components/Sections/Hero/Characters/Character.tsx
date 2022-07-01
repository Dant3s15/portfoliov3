import { Link } from "react-router-dom";
import classes from "./Character.module.scss";
import characterImage from "../../../../resources/img/character.png";

interface Props {
  dataConstPos?: number;
  data?: number | string;
  selected?: boolean;
  name: string;
  onRotateCharacters: (e: any) => void;
  selectedCtx?: boolean;
}
const Character = ({
  data,
  dataConstPos,
  selected,
  name,
  onRotateCharacters,
  selectedCtx,
}: Props) => {
  const whichSide = (data: number | string): string | undefined => {
    let side = +data;
    if (side === 0) return "left";
    if (side === 1) return "front";
    if (side === 2) return "right";
  };

  const getMoveTo = (charNumb: number | undefined) => {
    if (charNumb === 0) {
      return "creator";
    }
    if (charNumb === 1) {
      return "about-me";
    }
    if (charNumb === 2) {
      return "/";
    }
    return "/";
  };

  const curChar = classes[`character__${whichSide(data!)}`];

  return (
    <Link
      to={getMoveTo(dataConstPos)}
      className={`${classes.character} ${curChar ? curChar : ""} ${
        selected ? classes.selected : ""
      } ${!selectedCtx ? "" : classes.blured}`}
      onClick={(e) => {
        onRotateCharacters(e);
      }}
    >
      <div className={classes.character__name}>{name}</div>
      <img
        data-const-pos={dataConstPos}
        data-character={data}
        src={characterImage}
        alt="character image"
      />
    </Link>
  );
};

export default Character;
