import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-col place-items-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Portfolio
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/assets/NextWebsite.png"
          title="Modern Next js Website"
          desc="lorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme llorem"
        />
        <ProjectCard
          src="/assets/NextWebsite.png"
          title="Modern Next js Website"
          desc="lorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme llorem"
        />
        <ProjectCard
          src="/assets/NextWebsite.png"
          title="Modern Next js Website"
          desc="lorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme loremlorem lorme llorem"
        />
      </div>
    </div>
  );
};

export default Project;
