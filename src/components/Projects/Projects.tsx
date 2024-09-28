import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="bg-[#1F1F1F]">
      <div id="Projects" className="p-10 mx-5 md:p-24 text-red-500 ">
        <h1 className=" text-[#D8A25E] text-2xl md:text-4xl font-extrabold text-center mb-8">Projects</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <ProjectCard
            title="Portfolio Website"
            main="Created a website to showcase my skills, experience, and work. Utilized ReactJS and Tailwind for building this website."
          />
          <ProjectCard
            title="Skill Up"
            main="Developed an innovative online learning platform designed to make education accessible and engaging for users worldwide."
          />
          <ProjectCard
            title="CodeWarriors"
            main="Created a platform for coding practice and interview prep with 200+ challenges in 14+ languages. Utilized ReactJS, Docker, CI/CD, and MERN stack for coding contests, detailed solutions, and community discussions."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
