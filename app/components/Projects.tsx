import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section>
      <h2 className="text-3xl py-1">Projects</h2>
      <p className="text-md, py-2, leading-8 text-gray-800 ">
        As a frontend engineer, i have worked as a freelance engineer, web
        developer, project manager, and mobile engineer for{" "}
        <span className="text-teal-400">startups</span> and{" "}
        <span className="text-teal-400">agencies</span>. I have collaborated
        with amazing and talented people all over the world to create world
        class applications for businesses.
      </p>
      <p className="text-md py-2 leading-8, text-gray-800">
        I offer a wide range of services, including programming and teaching.
      </p>
    </section>
  );
};

export default Projects;
