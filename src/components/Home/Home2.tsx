import React from "react";
import TextChange from "../TextChange";

const Home2 = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight italic my-4">
          I'm a passionate Full Stack Web Developer, eager to explore limitless
          possibilities of web development and infusing it with a touch of
          creativity. I thrive on tackling challenges head-on and turning
          innovative ideas into practical solutions.
        </p>
      </div>
      <div>
        <img
          className="rounded-md mx-24 w-96 h-auto max-w-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src="/simran.png" alt="Simran Tyagi"
        />
      </div>
    </div>
  );
};

export default Home2;
