import { Fragment } from 'react';
import classes from './Projects.module.scss';
import CardGlass from '../../UI/CardGlass';
import AllSkils from '../../../components/Utils/AllSkills';
import project1 from '../../../resources/img/projects/project1.png';

const Projects = props => {
  // const test = useRef(null);
  // console.log(test.current.childNodes[1]);
  return (
    <div className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div className={classes['my-projects']}>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject
              projectData={{
                image: project1,
                title: 'portfolio',
                overview:
                  '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus? Non doloremque quasi earum nisi aut fuga totam, iure reiciendis.',
                skills: [AllSkils[1], AllSkils[2]],
              }}
            />
          </CardGlass>
        </div>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject
              projectData={{
                image: project1,
                title: 'portfolio',
                overview:
                  '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus? Non doloremque quasi earum nisi aut fuga totam, iure reiciendis.',
                skills: [AllSkils[1], AllSkils[2]],
              }}
            />
          </CardGlass>
        </div>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject
              projectData={{
                image: project1,
                title: 'portfolio',
                overview:
                  'My portfolio project inspired by game character selecion screens, with custom character creator.',
                skills: [
                  AllSkils[1],
                  AllSkils[2],
                  AllSkils[3],
                  AllSkils[26],
                  AllSkils[13],
                  AllSkils[23],
                  AllSkils[5],
                  AllSkils[21],
                ],
              }}
            />
          </CardGlass>
        </div>
      </div>
    </div>
  );
};

const CardProject = props => {
  const skillsArr = props.projectData?.skills;
  const skills = skillsArr?.map(skill => (
    <li className={classes['skill']}>
      <img src={skill.icon} alt='' />
      <p className={classes['skill-title']}>{skill.name}</p>
    </li>
  ));
  console.log(skills);
  return (
    <Fragment>
      <img
        src={props.projectData?.image}
        className={classes['project-image']}
      ></img>
      <div className={classes['project-description']}>
        <div className={classes['project-title']}>
          {props.projectData?.title ?? 'Title'}
        </div>
        <div className={classes['project-overview']}>
          <p>{props.projectData?.overview}</p>
        </div>
        <p className={classes['used-skills-title']}>Used:</p>
        <ul className={classes['used-skills']}>{skills}</ul>
      </div>
    </Fragment>
  );
};

export default Projects;
