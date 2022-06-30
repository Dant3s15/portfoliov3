// import 'animate.css';
import { CSSProperties, FC, MouseEventHandler } from "react";
import classes from "./ButtonPrimary.module.scss";

interface Props {
  style?: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  isAbsolute?: boolean;
  isGreyedOut?: boolean;
  moveTo?: string;
  text?: string;
}

const ButtonPrimary: FC<Props> = ({
  type,
  isAbsolute,
  isGreyedOut,
  text,
  style,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${classes["button-primary"]}
    ${isAbsolute && classes.absolute}  ${
        isGreyedOut && classes["greyed-out"]
      } `}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
