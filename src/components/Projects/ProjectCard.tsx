import React from "react";

const ProjectCard = ({ title, main }: any) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#D8A25E] shadow-xl shadow-slate-900 rounded-2xl">
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4"></div>
    </div>
  );
};

export default ProjectCard;
