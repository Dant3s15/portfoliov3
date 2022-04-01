import classes from './ButtonBig.module.scss';
const ButtonBig = props => {
  return (
    <button
      className={`${classes['button-big']} card--glass`}
      onClick={props.onClick}
    >
      <div className={classes['cta__button--text']}>{props.text}</div>
    </button>
  );
};

export default ButtonBig;
