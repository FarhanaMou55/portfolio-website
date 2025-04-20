import React from "react";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import reactLogo from "../../assets/science.png";
import tailwind from "../../assets/Tailwind CSS.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import nodejs from "../../assets/1764875.webp";
import redux from "../../assets/icons8-redux-250.png";

const skills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "React", image: reactLogo },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Redux", image: redux },
  { name: "Node.js", image: nodejs },
  { name: "Express.js", image: express },
  { name: "MongoDB", image: mongodb },
];

const Myskill = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Skills
      </h2>
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-xl shadow-lg bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2 transition-transform duration-300"
            />
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myskill;
