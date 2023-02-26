import React from "react";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  MailIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assets/support.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className="w-full mt-24 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h3 className="text-5xl font-bold py-6 text-center">Contact</h3>
          <p className="py-4 text-3xl text-slate-300 text-center">
            Phone number, Email and Social Media Links
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl scale-30 hover:scale-105 ease-in duration-300">
            <div className="p-8 ">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Phone</h3>
              <div>
              <a href="tel:+251910873541">
                <p className="text-gray-600 text-xl">
                  <FaPhone /> +251910873541
                </p>
                </a>
                <a href="tel:+251910873541">
                <p className="text-gray-600 text-xl mt-3">
                  <FaPhone /> +251703873541
                </p>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl scale-30 hover:scale-105 ease-in duration-300">
            <div className="p-8">
              <MailIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Email</h3>
              <div>
                <a href="mailto:ihsahm@gmail.com">
                  <p className="text-gray-600 text-xl">
                    <FaMailBulk />
                    ihsahm@gmail.com
                  </p>
                </a>
                <a href="mailto:ihsahm14@gmail.com">
                  <p className="text-gray-600 text-xl mt-3">
                    <FaMailBulk />
                    ihsahm14@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl scale-30 hover:scale-105 ease-in duration-300">
            <div className="p-8">
              <GlobeIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Social Media</h3>
              <div>
                <a href="https://github.com/ihsahm" target="_blank">
                  <p className="text-gray-600 text-xl">
                    <FaGithub />
                    Github
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/ihsan-ahmed-52787575/"
                  target="_blank"
                >
                  <p className="text-gray-600 text-xl mt-3">
                    <FaLinkedin />
                    Linkedin
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
