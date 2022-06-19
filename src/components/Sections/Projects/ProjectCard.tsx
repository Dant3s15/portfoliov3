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

const CardProject: FC<CardProjectProps> = ({
  allSkillsData,
  isLoading,
  projectData,
  onClick,
  selectedState,
  style,
}) => {
  const projectCardRef = useRef<null | HTMLDivElement>(null);
  const cardClickHandler = (e: any) => {
    e.nativeEvent.stopPropagation();

    selectedState.setWhichSelected(projectData.id);
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
        selectedState.setWhichSelected(null);
      }}
      ref={projectCardRef}
      className={`${classes['project-wrapper']} ${
        projectData.id === selectedState.whichSelected
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
            <a href={projectData?.repo} target='_blank'>
              <img src={github} alt='github' />
            </a>
          </Tooltip>
        </div>
        <div className={classes['project-image-window']}>
          <a
            className={classes['project-link']}
            href={projectData?.link}
            target='_blank'
          >
            <Tooltip
              arrow
              key={Math.random()}
              placement='top'
              title={`Go To Live Project Site`}
            >
              <img
                src={projectData?.image}
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
            {projectData?.title ?? 'Title'}
          </h3>
          <div className={classes['project-overview']}>
            <p>{projectData?.overview}</p>
          </div>
          <h3 className={classes['used-skills-title']}>Skills Used:</h3>
          <ul className={classes['used-skills']}>
            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <ProjectSkillsList
                allSkillsData={allSkillsData}
                projectData={projectData}
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

const ProjectSkillsList: FC<ListProps> = ({ allSkillsData, projectData }) => {
  const findSkill = (skillName: string) => {
    allSkillsData?.map((skill: skillInterface) => {
      return skill;
    });
    const resultSkill = {
      ...allSkillsData.find(
        (skill: skillInterface) => skill.name === skillName
      ),
    };
    return resultSkill;
  };

  return projectData.skills.map((skill: string) => {
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
