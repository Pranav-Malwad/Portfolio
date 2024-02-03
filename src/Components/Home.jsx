import React from "react";
import { Link } from "react-scroll";
import Profile from "../assets/profile.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi
            provident quaerat itaque repellendus! Mollitia suscipit laboriosam
            non neque quis vero commodi eum.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight
                  size={25}
                  className="ml-1"
                ></MdKeyboardArrowRight>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt="My Profile"
            className="rounded-2xl h-[400px] object-cover mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;