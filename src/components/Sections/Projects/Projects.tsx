import { Fragment } from 'react';
import { useSpring } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import classes from './Projects.module.scss';
import ProjectsList from './ProjectsList';
import AllSkils from '../../../components/Utils/AllSkills';
import project1 from '../../../resources/img/projects/project1.png';

const Projects = () => {
  //SPRING AND GESTURE
  const [style, set] = useSpring(() => ({
    transformOrigin: 'right center',
    // transition: 'all 0.3s',
    transform: 'scale(0.9) perspective(500px) rotateY(-15deg) ',
  }));

  const bind = useScroll(event => {
    let scrollVal = event.scrolling
      ? event.delta[0] >= 0 || -15
        ? -5
        : event.delta[0]
      : -15;

    set({
      transformOrigin: 'right center',
      // transition: 'all 0.3s',
      transform: `scale(0.9) perspective(500px) rotateY(${scrollVal}deg)`,
    });
  });
  /**************/

  const projectsArr = [
    {
      id: 0,
      image: project1,
      title: 'portfolio1',
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
      title: 'portfolio2',
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
      title: 'portfolio3',
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
      title: 'portfolio4',
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
      title: 'portfolio5',
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

  return (
    <div id='my-projects' className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div
        className={classes['my-projects']}
        // {...bind()}
      >
        <ProjectsList
          data={{
            array: projectsArr,
            style: style,
          }}
        ></ProjectsList>
      </div>
    </div>
  );
};

export default Projects;
