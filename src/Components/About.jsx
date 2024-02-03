import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Passionate frontend developer with [II] years of experience in
          creating engaging web experiences. Proficient in HTML, CSS, and
          JavaScript, with expertise in frameworks like React JS. Dedicated to
          writing clean, efficient, and maintainable code. Strong advocate for
          user-centered design and seamless interfaces. Collaborative team
          player with excellent communication skills. Constantly staying
          up-to-date with the latest frontend trends and technologies.
        </p>
        <br />
        <p className="text-xl">
          Detail-oriented and committed to pixel-perfect designs. Enjoys
          exploring new technologies and attending web development conferences.
          Curious learner, always seeking opportunities for growth. Let's
          collaborate and create exceptional user experiences together!
        </p>
      </div>
    </div>
  );
};

export default About;
