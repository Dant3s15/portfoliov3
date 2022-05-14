import { FC, ReactNode, useRef } from 'react';
import { animated } from 'react-spring';
import CardGlass from '../../UI/CardGlass';
import github from '../../../resources/icons/logo-github.svg';
import classes from './ProjectCard.module.scss';

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

  const skillsArr = props.projectData?.skills;
  const skills = skillsArr?.map(skill => (
    <li key={Math.random()} className={classes['skill']}>
      <img src={skill.icon} alt={`${skill.name} icon`} />
      <p className={classes['skill-title']}>{skill.name}</p>
    </li>
  ));

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

export default CardProject;
