import classes from './Skill.module.scss';

const Skill = props => {
  const manageSkillHandler = () => {
    console.log('click', props.data.id);
  };

  return (
    <div className={classes.skill}>
      <div className={classes.icon}>
        <img src={props.data.icon} alt='skill icon' />
      </div>
      <div className={classes.name}>
        {props.data.name} {props.data.id}
      </div>
      <button
        onClick={() => {
          props.onSkillChange(props.data.id);
        }}
        className={classes['manage-skill']}
      >
        +
      </button>
    </div>
  );
};

export default Skill;
