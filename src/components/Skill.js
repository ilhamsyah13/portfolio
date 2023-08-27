import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const skillList = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
];

const Skill = () => {
  return (
    <div className="flex justify-center" id="skill">
      <div className="container w-10/12 mt-10">
        <h4 className="text-4xl font-black">Skills</h4>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 text-4xl mt-10">
          {skillList.map((item, index) => {
            return (
              <div className="flex" key={index}>
                {item.icon}
                <p className="text-2xl content-center flex items-center pl-3">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
