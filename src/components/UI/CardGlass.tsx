// import { Fragment, useEffect } from 'react';
import classes from './CardGlass.module.scss';
const CardGlass = props => {
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
