import classes from './Projects.module.scss';
import CardGlass from '../../UI/CardGlass';
import { Fragment } from 'react';
const Projects = props => {
  // const test = useRef(null);
  // console.log(test.current.childNodes[1]);
  return (
    <div className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div className={classes['my-projects']}>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject />
          </CardGlass>
        </div>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject />
          </CardGlass>
        </div>
        <div className={classes.scene}>
          <CardGlass className={`${classes.project}`}>
            <CardProject />
          </CardGlass>
        </div>
      </div>
    </div>
  );
};

const CardProject = props => {
  return (
    <Fragment>
      <div
        // onMouseOver={() => console.log('test')}
        className={classes['project-image']}
      ></div>
      <div className={classes['project-description']}>
        <div>Project Title</div>
        <div>Project Descripiton</div>
        <div>Used Skills</div>
      </div>
    </Fragment>
  );
};

export default Projects;
