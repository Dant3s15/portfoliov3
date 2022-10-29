import { FC, useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  data?: any;
}

const ProjectsList: FC<ProjectsProps> = ({ data }) => {
  const [whichSelected, setWhichSelected] = useState<number | null>(null);

  return data.map((project: any) => (
    <ProjectCard
      style={data.style}
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
