import { Fragment } from 'react';
import classes from './Projects.module.scss';
import CardGlass from '../../UI/CardGlass';
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
            <CardProject projectData={{ image: project1 }} />
          </CardGlass>
        </div>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject projectData={{ image: project1 }} />
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
              }}
            />
          </CardGlass>
        </div>
      </div>
    </div>
  );
};

const CardProject = props => {
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

        <div>Used Skills</div>
      </div>
    </Fragment>
  );
};

export default Projects;
