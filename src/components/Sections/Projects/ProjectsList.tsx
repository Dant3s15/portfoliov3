import { FC, useEffect, useState } from 'react';
import { skillInterface } from '../../../Types/types';
import CardProject from './ProjectCard';

interface ProjectsProps {
  data?: any;
  isLoading: boolean;
  allSkillsData: skillInterface[];
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

  return props.data.array.map((project: any) => (
    <CardProject
      allSkillsData={props.allSkillsData}
      isLoading={props.isLoading}
      style={props.data.style}
      selectedState={{
        whichSelected,
        setWhichSelected,
      }}
      key={project.id}
      projectData={project}
    />
  ));
};

export default ProjectsList;
