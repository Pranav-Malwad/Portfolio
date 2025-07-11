import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import next from "../assets/nextjs.png";
import angular from "../assets/angular.svg";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.svg";
const Experience = () => {
  const techstack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: angular,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind Css",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-e-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the Technologies i worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techstack.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={
                  "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                  " " +
                  style
                }
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
