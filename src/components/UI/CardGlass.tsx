import { FC } from "react";
import classes from "./CardGlass.module.scss";
interface Props {
  corner?: boolean;
  className?: string;
  children: any;
  onClick?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onMouseOver?: any;
  ariaLabel?: string;
  datatile?: string;
}

const CardGlass: FC<Props> = ({
  onClick,
  className,
  corner,
  children,
  ariaLabel,
  onMouseEnter,
  onMouseLeave,
  onMouseOver,
  datatile,
}) => {
  return (
    <div
      data-tile={datatile}
      onMouseOver={onMouseOver}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={ariaLabel}
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
