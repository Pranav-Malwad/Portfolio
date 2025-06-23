import React from "react";
import portfolio from "../assets/portfolio/portfolio.png";
import learnify from "../assets/portfolio/learnify.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Portfolio",
      src: portfolio,
      demo: "https://pranavmalwad.netlify.app/",
      code: "https://github.com/Pranav-Malwad/Personal-Portfolio-Website-.git",
    },
    {
      id: 2,
      name: "Learnify",
      src: learnify,
      demo: "https://learnifycom.netlify.app/",
      code: "https://github.com/Pranav-Malwad/LMS-Frontend-.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, name }) => {
            return (
              <div key={id} className="shadow-md shadow-indigo-700 rounded-lg">
                <p className="p-2 text-center text-lg font-semibold ">
                  {name}
                </p>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(demo)}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(code)}
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
