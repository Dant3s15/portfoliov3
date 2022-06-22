// import 'animate.css';
import { CSSProperties, FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonBig.module.scss";

interface Props {
  style?: CSSProperties | undefined;
  onClck?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  isAbsolute?: boolean;
  isGreyedOut?: boolean;
  moveTo?: string;
  text?: string;
}

const ButtonBig: FC<Props> = ({
  type,
  isAbsolute,
  isGreyedOut,
  moveTo,
  text,
  style,
  onClck,
}) => {
  return (
    <button
      type={type}
      className={`${classes["button-big"]}
    ${isAbsolute && classes.absolute}  ${
        isGreyedOut && classes["greyed-out"]
      } `}
      style={style}
      onClick={onClck}
    >
      {type !== "submit" && isGreyedOut ? (
        <Link className={classes["button-text"]} to={`${moveTo ? moveTo : ""}`}>
          {text}
        </Link>
      ) : (
        <p className={classes["button-text"]}>{text}</p>
      )}
    </button>
  );
};

export default ButtonBig;
