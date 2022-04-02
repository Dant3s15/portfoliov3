// import { Fragment, useEffect } from 'react';
import classes from './CardGlass.module.scss';
const CardGlass = props => {
  return (
    <div
      className={`${classes['card--glass']} ${
        props.classes ? props.classes : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default CardGlass;
