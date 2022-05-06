import { FC, useEffect, useState } from 'react';
import CardProject from './ProjectCard';

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

  return props.data.array.reverse().map((project: any) => (
    <CardProject
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
