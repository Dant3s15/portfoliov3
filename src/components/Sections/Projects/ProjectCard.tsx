import { FC, ReactNode, useRef } from 'react';
import { animated } from 'react-spring';
import CardGlass from '../../UI/CardGlass';
import github from '../../../resources/icons/logo-github.svg';
import classes from './ProjectCard.module.scss';
import { skillInterface } from '../../../Types/types';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Tooltip from '@mui/material/Tooltip';

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
  isLoading: boolean;
  allSkillsData: skillInterface[];
}

const CardProject: FC<CardProjectProps> = props => {
  const projectCardRef = useRef<null | HTMLDivElement>(null);
  const cardClickHandler = (e: any) => {
    e.nativeEvent.stopPropagation();

    props.selectedState.setWhichSelected(props.projectData.id);
    if (projectCardRef.current)
      projectCardRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
  };

  return (
    <animated.div
      onMouseLeave={() => {
        props.selectedState.setWhichSelected(null);
      }}
      ref={projectCardRef}
      className={`${classes['project-wrapper']} ${
        props.projectData.id === props.selectedState.whichSelected
          ? classes['selected-project']
          : ''
      } `}
    >
      <CardGlass className={`${classes.project}`}>
        <div className={classes.links}>
          <Tooltip
            key={Math.random()}
            placement='top'
            title={`Go To GitHub Repository`}
          >
            <a href={props.projectData?.repo} target='_blank'>
              <img src={github} alt='github' />
            </a>
          </Tooltip>
        </div>
        <div className={classes['project-image-window']}>
          <a
            className={classes['project-link']}
            href={props.projectData?.link}
            target='_blank'
          >
            <Tooltip
              arrow
              key={Math.random()}
              placement='top'
              title={`Go To Live Project Site`}
            >
              <img
                src={props.projectData?.image}
                className={classes['project-image']}
              />
            </Tooltip>
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
          <ul className={classes['used-skills']}>
            {props.isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <ProjectSkillsList
                allSkillsData={props.allSkillsData}
                projectData={props.projectData}
              ></ProjectSkillsList>
            )}
          </ul>
        </div>
      </CardGlass>
    </animated.div>
  );
};
interface ListProps {
  allSkillsData: skillInterface[];
  projectData: any;
}

const ProjectSkillsList: FC<ListProps> = props => {
  const findSkill = (skillName: string) => {
    props?.allSkillsData?.map((skill: skillInterface) => {
      return skill;
    });
    const resultSkill = {
      ...props.allSkillsData.find(
        (skill: skillInterface) => skill.name === skillName
      ),
    };
    return resultSkill;
  };

  return props.projectData.skills.map((skill: string) => {
    const fetchedSkill = findSkill(skill);
    return (
      <Tooltip
        arrow
        key={Math.random()}
        placement='top'
        title={`Skill Used To Create This Project`}
      >
        <li className={classes['skill']}>
          <div className={classes.icon}>
            <img
              src={fetchedSkill.icon}
              alt={`${fetchedSkill.names?.[0]} icon`}
            />
          </div>
          <p className={classes['skill-title']}>{fetchedSkill.names?.[0]}</p>
        </li>
      </Tooltip>
    );
  });
};

export default CardProject;
