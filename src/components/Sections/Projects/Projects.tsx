import { FC, Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import classes from './Projects.module.scss';
import CardGlass from '../../UI/CardGlass';
import AllSkils from '../../../components/Utils/AllSkills';
import project1 from '../../../resources/img/projects/project1.png';
// import webLink from '../../../resources/icons/globe-outline.svg';
import github from '../../../resources/icons/logo-github.svg';

const Projects = () => {
  // const [isSelected, setIsSelected] = useState(false);
  //SPRING AND GESTURE
  const [style, set] = useSpring(() => ({
    transformOrigin: 'right center',
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
      transform: `scale(0.9) perspective(500px) rotateY(${scrollVal}deg)`,
    });
  });
  /**************/

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

  // const cardClickHandler = (e: any) => {
  //   console.log(e);
  //   setIsSelected(true);
  // };
  // const projectHoverHandler = (id: number) => {
  //   // console.log(projectsRefs[id]);
  // };

  // const projectsList = (): JSX.Element[] => {
  //   const calcPos = (id: number) => {
  //     const result = 100 / id;
  //   };
  //   calcPos(2);
  //   return projectsArr.reverse().map(project => (
  //     <animated.div
  //       className={`${classes['project-wrapper']} `}
  //       key={project.id}
  //       style={{ ...style }}
  //     >
  //       <CardProject
  //         onClick={(e: any) => {
  //           // cardClickHandler(e);
  //           console.log('test', e);
  //         }}
  //         key={project.id}
  //         projectData={project}
  //       />
  //     </animated.div>
  //   ));
  // };

  return (
    <div id='my-projects' className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      {/* <div className={classes.wrapper}> */}
      <div className={classes['my-projects']} {...bind()}>
        {/* {projectsList()} */}
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
        <ProjectsList
          data={{
            array: projectsArr,
            style: style,
          }}
        ></ProjectsList>
      </div>
    </div>
    // </div>
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
    id: number;
  };
  onClick?: any;
  style?: any;
  selectedState?: any;
  // selectedCardHandler?: any;
}

const CardProject: FC<CardProjectProps> = props => {
  // const [isSelected, setIsSelected] = useState(false);
  // const ProjCardRef = useRef(null);
  const cardClickHandler = (e: any) => {
    props.selectedState.setWhichSelected(props.projectData.id);
    // ProjCardRef.current.scrollIntoView({ block: 'center' });
    // console.log(props.selectedState.isAnythingSelected);
    // props.selectedState.setIsAnythingSelected(true);
    // setIsSelected(!isSelected);
    // if (props.selectedState.isAnythingSelected) {
    //   setIsSelected(true);
    // }
    // if (props.projectData.id === props.selectedState.whichSelected) {
    //   setIsSelected(true);
    // } else {
    //   setIsSelected(false);
    // }
  };

  const skillsArr = props.projectData?.skills;
  const skills = skillsArr?.map(skill => (
    <li key={Math.random()} className={classes['skill']}>
      <img src={skill.icon} alt='' />
      <p className={classes['skill-title']}>{skill.name}</p>
    </li>
  ));
  // console.log(props.selectedState.whichSelected);
  return (
    <animated.div
      // ref={ProjCardRef}
      className={`${classes['project-wrapper']} ${
        props.projectData.id === props.selectedState.whichSelected
          ? classes['selected-project']
          : ''
      } `}
      // key={props.data.project.id}
      style={{ ...props.style }}
    >
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
        <div
          onClick={cardClickHandler}
          className={classes['project-description']}
        >
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
    </animated.div>
  );
};
interface ProjectsProps {
  data?: any;
}

const ProjectsList: FC<ProjectsProps> = props => {
  const [whichSelected, setWhichSelected] = useState(null);
  const myProjects = document.getElementById('my-projects');

  useEffect(() => {
    myProjects?.addEventListener('click', () => {
      setWhichSelected(null);
    });
    myProjects?.addEventListener('touch', () => {
      setWhichSelected(null);
    });

    return () => {
      myProjects?.removeEventListener('click', () => {
        setWhichSelected(null);
      });
      myProjects?.removeEventListener('touch', () => {
        setWhichSelected(null);
      });
    };
  }, [whichSelected]);
  // const selectedCardHandler = () => {

  // };
  // const [isSelected, setIsSelected] = useState(false);
  // const cardClickHandler = (e: any) => {
  //   console.log(e);
  //   setIsSelected(!isSelected);
  // };

  // const calcPos = (id: number) => {
  //   const result = 100 / id;
  // };
  // calcPos(2);
  return props.data.array.reverse().map((project: any) => (
    // <animated.div
    //   className={`${classes['project-wrapper']} ${
    //     isSelected ? classes['selected-project'] : ''
    //   } `}
    //   key={project.id}
    // >
    <CardProject
      style={props.data.style}
      selectedState={{
        whichSelected,
        setWhichSelected,
      }}
      // selectedCard={selectedCardHandler}
      // onClick={(e: any) => {
      //   cardClickHandler(e);
      //   console.log('test', e);
      // }}
      key={project.id}
      projectData={project}
    />
    // </animated.div>
  ));
};

export default Projects;
