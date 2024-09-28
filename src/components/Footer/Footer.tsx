"use client"; // Add this at the top of your component file

import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "tyagisimran938@gmail.com";

    navigator.clipboard.writeText(email)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Reset the state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-gray-800 text-white p-10 md:p-12 items-center mt-28 shadow-lg rounded-lg"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">Contact</h1>
        <p className="text-sm md:text-lg text-gray-400">Feel free to reach out!</p>
      </div>

      <ul className="text-sm md:text-xl mt-4 md:mt-0 space-y-4">
        {/* Email with copy functionality by clicking */}
        <li
          className="flex gap-2 items-center text-slate-200 cursor-pointer transition duration-200 ease-in-out hover:text-blue-400"
          onClick={copyEmailToClipboard}
        >
          <MdOutlineEmail size={24} />
          <span>
            {emailCopied ? "Email Copied!" : "tyagisimran938@gmail.com"}
          </span>
        </li>

        {/* LinkedIn Link using native <a> tag */}
        <li className="flex gap-2 items-center text-slate-200 transition duration-200 ease-in-out hover:text-blue-400">
          <CiLinkedin size={24} />
          <a
            href="https://linkedin.com/in/siimran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300"
          >
            linkedin.com/in/siimran
          </a>
        </li>

        {/* GitHub Link using native <a> tag */}
        <li className="flex gap-2 items-center text-slate-200 transition duration-200 ease-in-out hover:text-blue-400">
          <FaGithub size={24} />
          <a
            href="https://github.com/siimrann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300"
          >
            github.com/siimrann
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
