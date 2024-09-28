import React from "react";
import TextChange from "../TextChange";

const Home2: React.FC = () => {
  return (
    <div className="text-white bg-[#1F1F1F] flex flex-col md:flex-row justify-between items-center w-full p-6 md:p-10">
      <div className="flex flex-col justify-center items-center md:w-1/2 md:pt-10 p-4  rounded-lg shadow-lg transition duration-300">
        <h1 className="text-xl md:text-5xl font-bold leading-normal tracking-tighter text-center">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg tracking-tight italic my-4 text-center">
          I&apos;m a passionate Full Stack Web Developer, eager to explore limitless
          possibilities of web development and infusing it with a touch of
          creativity. I thrive on tackling challenges head-on and turning
          innovative ideas into practical solutions.
        </p>
      </div>
      <div className="flex justify-center items-center p-4">
        <img
          className="rounded-md w-72 h-72 md:w-96 md:h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src="/simran.png"
          alt="Simran Tyagi"
        />
      </div>
    </div>
  );
};

export default Home2;
