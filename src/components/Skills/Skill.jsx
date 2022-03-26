import classes from './Skill.module.scss';

const Skill = props => {
  return (
    <li className={classes['skills-list__skill']} key={props.skill.id}>
      {props.skill.icon ? <img src={props.skill.icon}></img> : ''}
      <a href='/#' className={classes['skill-name']}>
        {props.skill.name}
      </a>
    </li>
  );
};

export default Skill;
