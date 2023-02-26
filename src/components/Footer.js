import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">&#169;Ihsan Ahmed. All rights reserved.</p>
        <div className="flex justify-between  sm:w-[300px] pt-4 text-2xl">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/ihsan-ahmed-52787575/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ihsahm" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
