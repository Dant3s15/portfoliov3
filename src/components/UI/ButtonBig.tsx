// import 'animate.css';
import { CSSProperties, FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import classes from './ButtonBig.module.scss';

interface Props {
  style?: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isAbsolute?: boolean;
  isGreyedOut?: boolean;
  moveTo?: string;
  text?: string;
}

const ButtonBig: FC<Props> = (props: any) => {
  return (
    <button
      type={props.type ? props.type : undefined}
      key={Math.random()}
      className={`${classes['button-big']}
    ${props.isAbsolute && props.isAbsolute ? classes.absolute : ''}  ${
        props.isGreyedOut === true ? classes['greyed-out'] : ''
      } `}
      style={props.style}
      onClick={props.onClick}
    >
      {props.type !== 'submit' ? (
        <Link
          className={classes['button-text']}
          to={`${props.moveTo ? props.moveTo : ''}`}
        >
          {props.text}
        </Link>
      ) : (
        <p className={classes['button-text']}>{props.text}</p>
      )}
    </button>
  );
};

export default ButtonBig;
