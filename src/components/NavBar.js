import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="home" smooth={true} duration={500}>
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:cursor-pointer">PORTFOLIO</h1>
          </Link>
          <ul className="hidden md:flex">
            <Link to="home" smooth={true} duration={500}>
              <li className="hover:bg-gray-300 cursor-pointer">Home</li>
            </Link>
            <Link to="about" smooth={true} offset={-200} duration={500}>
              <li className="hover:bg-gray-300 cursor-pointer">About</li>
            </Link>
            <Link to="contact" smooth={true} offset={-50} duration={500}>
              <li className="hover:bg-gray-300 cursor-pointer">Contact</li>
            </Link>
            <Link to="features" smooth={true} offset={-100} duration={500}>
              <li className="hover:bg-gray-300 cursor-pointer">Skills</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full hover:cursor-pointer" >
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:cursor-pointer">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:cursor-pointer">
          <Link
            onClick={handleClose}
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:cursor-pointer">
          <Link
            onClick={handleClose}
            to="features"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Features
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default NavBar;
