import { Fragment } from 'react';
import { useSpring } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import classes from './Projects.module.scss';
import ProjectsList from './ProjectsList';
import AllSkills from '../../../components/Utils/AllSkills';
import project1 from '../../../resources/img/projects/project1.webp';
import project2 from '../../../resources/img/projects/project2.webp';
import { skillInterface } from '../../../Types/types';

const Projects = () => {
  //TODO
  //SPRING AND GESTURE
  const [style, set] = useSpring(() => ({
    transformOrigin: 'right center',
    // transition: 'all 0.3s',
    transform: 'scale(0.9) perspective(500px) rotateY(-15deg) ',
  }));

  const getSkills = (charArr: any[]) => {
    const findSkill = (skillNmb: number): skillInterface => {
      AllSkills.map(skill => {
        return skill;
      });
      const resultSkill = { ...AllSkills.find(skill => skill.id === skillNmb) };
      return resultSkill;
    };
    let resultArr: any[] = [];
    charArr.forEach(item => {
      const findResult = findSkill(item);
      return resultArr.push(findResult);
    });
    return resultArr;
  };

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
      title: 'Portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
      skills: getSkills([1, 2, 3, 26, 49, 13, 23, 4, 5, 21]),
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 1,
      image: project2,
      title: 'Splitter',
      overview: (
        <Fragment>
          <strong>FrontendMentor.io</strong> challenge{' '}
          <strong>Tip Calculator</strong>, done in <strong>overkill</strong>{' '}
          stack.
        </Fragment>
      ),
      skills: getSkills([1, 2, 3, 26, 49, 13, 23, 4, 5, 21]),
      link: 'https://devmian-tip-calculator.web.app/',
      repo: 'https://github.com/Dant3s15/tip-calculator-react',
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
      skills: getSkills([3, 2, 3, 26, 49, 13, 23, 5, 21]),
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
      skills: getSkills([4, 2, 3, 26, 49, 13, 23, 5, 21]),
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
      skills: getSkills([5, 2, 3, 26, 49, 12, 23, 5, 21]),
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
  ];

  return (
    <section id='my-projects' className={classes.projects}>
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
    </section>
  );
};

export default Projects;
