// import { Fragment, useEffect } from 'react';
import { FC } from 'react';
import classes from './CardGlass.module.scss';
interface Props {
  className?: string;
  children: any;
}

const CardGlass: FC<Props> = props => {
  return (
    <div
      className={`${classes['card--glass']} ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default CardGlass;
