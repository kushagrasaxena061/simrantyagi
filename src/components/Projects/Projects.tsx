import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 mx-10 md:p-24 text-black ">
      <h1 className="text-2xl md:text-4xl text-black font-bold">Projects</h1>
      <div className=" px-8 flex flex-wrap gap-6 ">
        <ProjectCard
          title="Portfolio Website"
          main="Created a website to showcase my skills,experience and work.Utilized ReactJS and tailwind for building this website. "
        />
        <ProjectCard
          title="Skill Up"
          main="Developed an innovative online learning platform designed to make education accessible and engaging for users worldwide."
        />
        <ProjectCard
          title="CodeWarriors"
          main="Created a platform for coding practice and interview prep with 200+ challenges
in 14+ languages.Utilized ReactJS, Docker, CI/CD, and MERN stack for coding contests, detailed
solutions, and community discussions."
        />
      </div>
    </div>
  );
};

export default Projects;
