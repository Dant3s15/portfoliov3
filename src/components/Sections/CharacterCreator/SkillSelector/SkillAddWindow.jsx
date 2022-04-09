import Skill from './Skill/Skill';
import classes from './SkillAddWindow.module.scss';
const SkillAddWindow = props => {
  return (
    <div className={classes.blur}>
      <div className={classes['skill-add-window']}>
        <div className={classes.title}>Adding Skill</div>
        <Skill data={props.skillData} sign={'+'}></Skill>
        <div className={classes.levels}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default SkillAddWindow;
