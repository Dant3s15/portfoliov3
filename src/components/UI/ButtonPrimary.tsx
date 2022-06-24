// import 'animate.css';
import { CSSProperties, FC, MouseEventHandler } from "react";
import classes from "./ButtonPrimary.module.scss";

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
      {text}
    </button>
  );
};

export default ButtonBig;
