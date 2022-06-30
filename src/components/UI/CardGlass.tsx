// import { Fragment, useEffect } from 'react';
import { FC } from "react";
import classes from "./CardGlass.module.scss";
interface Props {
  corner?: boolean;
  className?: string;
  children: any;
  onClick?: any;
}

const CardGlass: FC<Props> = ({ onClick, className, corner, children }) => {
  return (
    <div
      onClick={onClick}
      className={`${classes["card--glass"]} ${className ? className : ""} ${
        corner && classes.corner
      }`}
    >
      {children}
    </div>
  );
};

export default CardGlass;
