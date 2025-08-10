"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center w-full h-full min-h-screen">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[20px] sm:text-[40px] font-medium text-center text-gray-200"
        >
          <span>
            Performance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 m-1">
              {""} &{" "}
            </span>
            Security
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[50px] absolute z-20 w-auto h-auto">
        <div className="hidden sm:flex flex-col items-center group cursor-pointer w-auto h-auto ">
          <Image
            src="/assets/LockTop.png"
            alt="lock"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/assets/LockMain.png"
            alt="lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border border-[#7042f88b] my-[20px] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encyrption</h1>
        </div>
      </div>

      <div className="w-full absolute flex items-start justify-center">
        <video
          src="/assets/encryption.webm"
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        ></video>
      </div>
    </div>
  );
};

export default Encryption;
