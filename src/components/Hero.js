import React from "react";
import {
  DeviceMobileIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div name='home' className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Ihsan Ahmed Mohammed
          </h1>
          <p className="text-2xl">This is my portfolio site</p>
        </div>
        <div>
          <img src={bgImg} className="w-full" alt="/" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
           border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="font-bold">Services</p>
          <div className="flex justify-between flex-wrap px-4 mt-3">
            <p className="flex px-4 py-2 text-slate-500"><DeviceMobileIcon className="h-6 text-indigo-600"/>Mobile App Development</p>
            <p className="flex px-4 py-2 text-slate-500"><InformationCircleIcon className="h-6 text-indigo-600"/> Website Development</p>
            <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-indigo-600"/> Database Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
