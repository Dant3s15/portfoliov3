import classes from './Skill.module.scss';

const Skill = props => {
  // const manageSkillHandler = () => {
  //   console.log('click', props.data.id);
  // };
  const levelHandler = (
    <div className={classes.level}>
      <p className={classes['level-title']}>LVL</p>
      <p>{props.data.level}</p>
    </div>
  );

  return (
    <div className={classes.skill}>
      <div className={classes.icon}>
        <img src={props.data.icon} alt='skill icon' />
      </div>
      <div className={classes.name}>
        {props.data.name} {props.data.id}
      </div>
      {props.data.level ? levelHandler : ''}
      <button
        onClick={() => {
          props.onSkillChange(props.data.id);
        }}
        className={classes['manage-skill']}
      >
        {props.sign}
      </button>
    </div>
  );
};

export default Skill;
