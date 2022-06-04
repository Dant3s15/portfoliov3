import { FC, Fragment, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import classes from './Projects.module.scss';
import ProjectsList from './ProjectsList';
// import AllSkills from '../../../components/Utils/AllSkills';
import project1 from '../../../resources/img/projects/project1.webp';
import project2 from '../../../resources/img/projects/project2.webp';
import { skillInterface } from '../../../Types/types';

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const Projects: FC<Props> = props => {
  //TODO
  //SPRING AND GESTURE
  const [style, set] = useSpring(() => ({
    transformOrigin: 'right center',
    // transition: 'all 0.3s',
    transform: 'scale(0.9) perspective(500px) rotateY(-15deg) ',
  }));

  const getSkills = (charArr: any[]) => {
    const findSkill = (skillName: string) => {
      props.allSkillsData.map(skill => {
        return skill;
      });
      const resultSkill = {
        ...props.allSkillsData.find(skill => skill.name === skillName),
      };
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
      skills: [
        'html',
        'css',
        'javascript',
        'react',
        'typescript',
        'sass',
        // 'css-modules',
        'git',
        'github',
        'firebase',
        'vite',
      ],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/DevmianS/portfoliov3',
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
      skills: [
        'html',
        'css',
        'javascript',
        'react',
        'typescript',
        'sass',
        'css-modules',
        'git',
        'github',
        'vite',
      ],
      link: 'https://devmian-tip-calculator.web.app/',
      repo: 'https://github.com/DevmianS/tip-calculator-react',
    },
    {
      id: 2,
      image: project1,
      title: 'Web-dev-API',
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ['javascript', 'expressjs', 'git', 'github'],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 3,
      image: project1,
      title: 'Web-dev-API',
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ['javascript', 'expressjs', 'git', 'github'],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 4,
      image: project1,
      title: 'Web-dev-API',
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ['javascript', 'expressjs', 'git', 'github'],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    // {
    //   id: 3,
    //   image: project1,
    //   title: 'portfolio4',
    //   overview: (
    //     <Fragment>
    //       Frontend game-like character <strong>selector</strong> and{' '}
    //       <strong>creator</strong> , create your own character or contact me and{' '}
    //       <strong>LEVEL ME UP!</strong>
    //     </Fragment>
    //   ),
    //   skills: getSkills([
    //     'html',
    //     'css',
    //     'javascript',
    //     'react',
    //     'typescript',
    //     'vite',
    //   ]),
    //   link: 'https://portfolio-27cdd.web.app/',
    //   repo: 'https://github.com/Dant3s15/portfoliov3',
    // },
    // {
    //   id: 4,
    //   image: project1,
    //   title: 'portfolio5',
    //   overview: (
    //     <Fragment>
    //       Frontend game-like character <strong>selector</strong> and{' '}
    //       <strong>creator</strong> , create your own character or contact me and{' '}
    //       <strong>LEVEL ME UP!</strong>
    //     </Fragment>
    //   ),
    //   skills: getSkills([
    //     'html',
    //     'css',
    //     'javascript',
    //     'react',
    //     'typescript',
    //     'sass',
    //     'css-modules',
    //     'git',
    //     'github',
    //     'vite',
    //   ]),
    //   link: 'https://portfolio-27cdd.web.app/',
    //   repo: 'https://github.com/Dant3s15/portfoliov3',
    // },
  ];

  return (
    <section id='my-projects' className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div
        className={classes['my-projects']}
        // {...bind()}
      >
        <ProjectsList
          allSkillsData={props.allSkillsData}
          isLoading={props.isLoading}
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
