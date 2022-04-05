import classes from './Skill.module.scss';

const Skill = props => {
  return (
    <div className={classes.skill}>
      <div className={classes.icon}>SVG</div>
      <div className={classes.name}>
        {props.data.name} {props.data.id}
      </div>
      <button className={classes['manage-skill']}>+</button>
    </div>
  );
};

export default Skill;
