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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero
          velit ea quae sint eveniet expedita cum molestias perspiciatis
          voluptas exercitationem quam eum, commodi excepturi fuga nobis quos,
          blanditiis nihil pariatur quisquam id obcaecati voluptates. Eaque
          repellat alias impedit aliquam. Quibusdam quod excepturi dolores
          impedit recusandae at doloribus dignissimos id.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum
          laboriosam accusamus ducimus ullam nisi fuga enim pariatur beatae
          eveniet cupiditate, suscipit ea hic dicta! Eius reprehenderit fugiat
          debitis nisi laudantium, accusamus vero totam porro reiciendis dicta,
          ullam, autem aut sed illo. Nemo dicta labore exercitationem fugit
          doloremque reprehenderit porro.
        </p>
      </div>
    </div>
  );
};

export default About;
