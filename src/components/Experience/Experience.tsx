import React from "react";
import { AiOutlineKubernetes } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import {
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiApachekafka, SiMongodb, SiNextdotjs, SiRedis } from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="text-white flex flex-col items-center m-4 md:m-20 overflow-hidden shadow-xl bg-[#E6B9A6] bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Experience</h1>
      <div className="flex flex-wrap items-center justify-center md:justify-around">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
          {[FaHtml5, FaCss3, FaReact, FaJs, FaDocker, SiMongodb, SiRedis, SiNextdotjs, FaNodeJs, DiPostgresql, AiOutlineKubernetes, SiApachekafka].map((Icon, index) => (
            <span key={index} className="p-4 bg-[#697565] flex items-center justify-center rounded-2xl hover:shadow-lg transition duration-300">
              <Icon color="#FFFFFF" size={50} />
            </span>
          ))}
        </div>

        <div className="flex flex-col md:w-1/2 mt-6 md:mt-0">
          {[{
            title: "Gonardweb Technologies",
            date: "July 2024 - Sept 2024",
            role: "- Work as Web Designer Intern",
          },
          {
            title: "GirlScript Summer of Code",
            date: "May 2024 - July 2024",
            role: "- Work as Contributor.",
          }].map((experience, index) => (
            <div key={index} className="flex gap-10 bg-[#697565] bg-opacity-45 mt-4 rounded-lg p-8 items-center hover:bg-opacity-60 transition duration-300">
              <span className="text-white">
                <h2 className="text-lg font-semibold leading-tight">{experience.title}</h2>
                <p className="text-sm font-thin leading-tight">{experience.date}</p>
                <ul className="text-sm p-2">{experience.role}</ul>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
