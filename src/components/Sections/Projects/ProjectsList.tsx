import { FC, useEffect, useState } from "react";
import { skillInterface } from "../../../Types/types";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  data?: any;
  isLoading: boolean;
  allSkillsData: skillInterface[];
}

const ProjectsList: FC<ProjectsProps> = ({
  allSkillsData,
  isLoading,
  data,
}) => {
  const [whichSelected, setWhichSelected] = useState<number | null>(null);
  const myProjects = document.getElementById("my-projects");

  // useEffect(() => {
  //   myProjects?.addEventListener("click", () => {
  //     setWhichSelected(null);
  //   });
  //   myProjects?.addEventListener("touch", () => {
  //     setWhichSelected(null);
  //   });

  //   return () => {
  //     myProjects?.removeEventListener("click", () => {
  //       setWhichSelected(null);
  //     });
  //     myProjects?.removeEventListener("touch", () => {
  //       setWhichSelected(null);
  //     });
  //   };
  // }, [whichSelected]);

  return data.map((project: any) => (
    <ProjectCard
      // allSkillsData={allSkillsData}
      isLoading={isLoading}
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
