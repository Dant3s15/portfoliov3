import { Link } from "react-router-dom";
import classes from "./Character.module.scss";
import characterImage from "../../../../resources/img/character.png";
import { ShepherdTourContext, ShepherdTour } from "react-shepherd";
import { useContext, useEffect } from "react";
interface Props {
  dataConstPos?: number;
  data?: number | string;
  selected?: boolean;
  name: string;
  onRotateCharacters: (e: any) => void;
  selectedCtx?: boolean;
  id?: string;
}
const Character = ({
  data,
  dataConstPos,
  selected,
  name,
  onRotateCharacters,
  selectedCtx,
  id,
}: Props) => {
  // const tour = useContext(ShepherdTourContext);
  // useEffect(() => {
  //   tour?.addStep({
  //     id: "intro2",
  //     attachTo: { element: "#tourStart", on: "top" },
  //     beforeShowPromise: function () {
  //       return new Promise(function (resolve) {
  //         setTimeout(function () {
  //           window.scrollTo(0, 0);
  //           resolve(true);
  //         }, 500);
  //       });
  //     },
  //     highlightClass: "highlight",
  //     scrollTo: false,
  //     cancelIcon: {
  //       enabled: true,
  //     },
  //     title: "Welcome to React-Shepherd!",
  //     text: [
  //       "hepherd is a JavaScript library for guiding users through your React app.",
  //     ],
  //     when: {
  //       show: () => {
  //         console.log("show step2");
  //       },
  //       hide: () => {
  //         console.log("hide step");
  //       },
  //     },
  //   });
  //   // tour?.getById(id)
  //   tour?.start();
  // }, []);
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
      id={id}
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
