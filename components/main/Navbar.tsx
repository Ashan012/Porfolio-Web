import { Socials } from "@/constant";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-1 sm:px-10">
      <div className="w-full h-full flex justify-between items-center">
        <a href="#about-me" className="flex items-center  ">
          <h1 className="text-gray-300 font-bold text-3xl">&lt; Ashan/&gt;</h1>
        </a>

        <div className="w-[500px] h-full hidden  md:flex flex-row items-center justify-between  md:mr-20">
          <div className=" w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex felx-row gap-2 sm:gap-5">
          {Socials.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt="social-links"
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
