import { FC, Fragment, ReactNode } from 'react';
import classes from './Projects.module.scss';
import CardGlass from '../../UI/CardGlass';
import AllSkils from '../../../components/Utils/AllSkills';
import project1 from '../../../resources/img/projects/project1.png';
// import webLink from '../../../resources/icons/globe-outline.svg';
import github from '../../../resources/icons/logo-github.svg';

const Projects = () => {
  const projectsArr = [
    {
      id: 0,
      image: project1,
      title: 'portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
      skills: [
        AllSkils[1],
        AllSkils[2],
        AllSkils[3],
        AllSkils[26],
        AllSkils[49],
        AllSkils[13],
        AllSkils[23],
        AllSkils[5],
        AllSkils[21],
      ],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 1,
      image: project1,
      title: 'portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
      skills: [
        AllSkils[1],
        AllSkils[2],
        AllSkils[3],
        AllSkils[26],
        AllSkils[49],
        AllSkils[13],
        AllSkils[23],
        AllSkils[5],
        AllSkils[21],
      ],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 2,
      image: project1,
      title: 'portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
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
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 3,
      image: project1,
      title: 'portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
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
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 4,
      image: project1,
      title: 'portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
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
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
  ];

  // const projectHoverHandler = (id: number) => {
  //   // console.log(projectsRefs[id]);
  // };

  const projectsList = (): JSX.Element[] => {
    const calcPos = (id: number) => {
      const result = 100 / id;
      console.log(result);
    };
    calcPos(2);
    return projectsArr.reverse().map(project => (
      <div
        // ref={projectsRefs[project.id]}
        key={project.id}
        className={classes.scene}
        // onMouseEnter={() => {
        //   projectHoverHandler(project.id);
        // }}
        // style={{ zIndex: `${project.id}` }}
      >
        <CardProject key={project.id} projectData={project} />
      </div>
    ));
  };

  return (
    <div id='my-projects' className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div className={classes.wrapper}>
        <div className={classes['my-projects']}>
          {projectsList()}
          {/* 
        <div className={classes.scene}>
        <CardProject projectData={projects[0]} />
        </div>
        <div className={classes.scene}>
        <CardProject projectData={projects[1]} />
        </div>
        <div className={classes.scene}>
        <CardProject projectData={projects[3]} />
      </div> */}
        </div>
      </div>
    </div>
  );
};

interface CardProjectProps {
  projectData: {
    skills: any[];
    repo: string;
    link: string;
    image: string;
    title: string;
    overview: ReactNode | undefined;
  };
}

const CardProject: FC<CardProjectProps> = props => {
  const skillsArr = props.projectData?.skills;
  const skills = skillsArr?.map(skill => (
    <li key={Math.random()} className={classes['skill']}>
      <img src={skill.icon} alt='' />
      <p className={classes['skill-title']}>{skill.name}</p>
    </li>
  ));
  return (
    <CardGlass className={`${classes.project}`}>
      <div className={classes.links}>
        <a href={props.projectData?.repo} target='_blank'>
          <img src={github} alt='github' />
        </a>
      </div>
      <div className={classes['project-image-window']}>
        <a
          className={classes['project-link']}
          href={props.projectData?.link}
          target='_blank'
        >
          <img
            src={props.projectData?.image}
            className={classes['project-image']}
          />
        </a>
      </div>
      <div className={classes['project-description']}>
        <h3 className={classes['project-title']}>
          {props.projectData?.title ?? 'Title'}
        </h3>
        <div className={classes['project-overview']}>
          <p>{props.projectData?.overview}</p>
        </div>
        <h3 className={classes['used-skills-title']}>Skills Used:</h3>
        <ul className={classes['used-skills']}>{skills}</ul>
      </div>
    </CardGlass>
  );
};

export default Projects;
