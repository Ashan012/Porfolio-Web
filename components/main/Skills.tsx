"use client";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constant";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillsText from "../sub/SkillsText";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-full gap-3 relative overflow-hidden pb-110 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillsText />
      <div className="flex flex-row justify-around items-center flex-wrap gap-5 mr-4">
        {Frontend_skill.map((item, index) => (
          <SkillsDataProvider
            key={index}
            src={item.Image}
            width={item.width}
            height={item.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around items-center flex-wrap gap-5 mr-4">
        {Backend_skill.map((item, index) => (
          <SkillsDataProvider
            key={index}
            src={item.Image}
            width={item.width}
            height={item.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around items-center flex-wrap gap-5 mr-4">
        {Full_stack.map((item, index) => (
          <SkillsDataProvider
            key={index}
            src={item.Image}
            width={item.width}
            height={item.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around items-center flex-wrap gap-5 mr-4">
        {Other_skill.map((item, index) => (
          <SkillsDataProvider
            key={index}
            src={item.Image}
            width={item.width}
            height={item.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/assets/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
