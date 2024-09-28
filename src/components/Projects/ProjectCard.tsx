

import React from "react";

interface ProjectCardProps {
  title: string;
  main: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, main }) => {
  return (
    <div className="bg-[#D8A25E] shadow-lg rounded-lg p-6 flex flex-col justify-between items-center w-full sm:w-72 md:w-80 lg:w-96 h-auto transition-all duration-300 hover:shadow-xl">
      <h2 className="text-lg font-bold text-center text-gray-800">{title}</h2>
      <p className="text-sm text-center text-gray-100 font-semibold">{main}</p>
    </div>
  );
};

export default ProjectCard;

