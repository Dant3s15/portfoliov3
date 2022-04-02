import 'animate.css';
import classes from './ButtonBig.module.scss';
const ButtonBig = props => {
  return (
    <a
      key={Math.random()}
      className={`${classes['button-big']} 
      ${props.isAbsolute.isAbsolute ? classes.absolute : ''} card--glass`}
      href={`#${props.moveTo ? props.moveTo : ''}`}
      onClick={props.onClick}
    >
      {props.text}
    </a>
  );
  // return (
  //   <button
  //     key={Math.random()}
  //     className={`${classes['button-big']}
  //     ${props.isAbsolute.isAbsolute ? classes.absolute : ''}

  //      card--glass`}
  //     onClick={props.onClick}
  //   >
  //     <div className={classes['cta__button--text']}>
  //       <a href={`#${props.moveTo ? props.moveTo : ''}`}>{props.text}</a>
  //     </div>
  //   </button>
  // );
};

export default ButtonBig;
// ${
//   props.animate
//     ? 'animate__animated animate__fadeInUpBig animate__faster '
//     : ''
// }
