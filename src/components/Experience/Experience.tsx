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
      className="text-white md:flex m-20 overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 bg-[#E6B9A6]">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <FaDocker color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <SiNextdotjs color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <FaNodeJs color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <DiPostgresql color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <AiOutlineKubernetes color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-[#697565] flex items-center rounded-2xl">
            <SiApachekafka color="#FF4438" size={50} />
          </span>
        </div>

        <div>
          <div className="flex gap-10 bg-[#697565] bg-opacity-45 mt-4 rounded-lg p-10 items-center  ">
            <span className="text-white">
              <h2 className="leading-tight">Gonardweb Technologies</h2>
              <p className="text-sm leading-tight font-thin">
                July 2024 - Sept 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Web Designer Intern</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-[#697565] bg-opacity-45 mt-4 rounded-lg p-10 items-center">
            <span className="text-white">
              <h2 className="leading-tight">GirlScript Summer of Code</h2>
              <p className="text-sm leading-tight font-thin">
                May 2024 - July 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Contributor.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
