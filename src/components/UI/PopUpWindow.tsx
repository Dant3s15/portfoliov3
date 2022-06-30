import CardGlass from "./CardGlass";
import ButtonPrimary from "./ButtonPrimary";
import classes from "./PopUpWindow.module.scss";
import { FC } from "react";

interface Props {
  message: string;
  btnTxt: string;
  onClick: () => void;
}

const PopUpWindow: FC<Props> = ({ message, onClick, btnTxt }) => {
  return (
    <div className={classes.backdrop} onClick={onClick}>
      <CardGlass className={classes.popup}>
        <span className={classes.text}>{message}</span>
        <ButtonPrimary onClick={onClick} text={btnTxt}></ButtonPrimary>
      </CardGlass>
    </div>
  );
};

export default PopUpWindow;
