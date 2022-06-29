import CardGlass from "./CardGlass";
import ButtonPrimary from "./ButtonPrimary";
import classes from "./PopUpWindow.module.scss";
import { FC } from "react";

interface Props {
  message: string;
  btnTxt: string;
  onClck: () => void;
}

const PopUpWindow: FC<Props> = ({ message, onClck, btnTxt }) => {
  return (
    <div className={classes.backdrop} onClick={onClck}>
      <CardGlass className={classes.popup}>
        <span className={classes.text}>{message}</span>
        <ButtonPrimary onClck={onClck} text={btnTxt}></ButtonPrimary>
      </CardGlass>
    </div>
  );
};

export default PopUpWindow;
