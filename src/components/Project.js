import React from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const listProject = [
  {
    name: "Website With Architecture & Architect Theme",
    desc: "Frontend website with architecture & architect theme that use UI design from Behance",
    urlGithub: "https://ilhamsyah13.github.io/frontend_architect/",
    urlWebsite: "https://ilhamsyah13.github.io/frontend_architect/",
    tools: ["React", "Tailwind"],
  },
  {
    name: "Book Recommendation Website",
    desc: "Platform for getting book recommendations uses the collaborative filtering method from the goodbooks-10k dataset.",
    urlGithub: "https://github.com/ilhamsyah13/Rekomendasi-buku",
    urlWebsite: "https://rekomendasi-buku.herokuapp.com/",
    tools: ["HTML", "CSS", "Javascript", "Python", "Flask", "Bootstrap"],
  },
  {
    name: "Auto Colorization Website",
    desc: "Platform for converting black and white images into color",
    urlGithub: "https://github.com/ilhamsyah13/Colorized",
    urlWebsite: "https://autocolorization.herokuapp.com/",
    tools: ["HTML", "CSS", "Javascript", "Python", "Flask"],
  },
];
const Project = () => {
  return (
    <div id="project" className="flex justify-center ">
      <div className="container w-10/12 mt-5">
        <h2 className="text-4xl font-black">Projects</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-10">
          {listProject.map((item, index) => {
            return (
              <div className="m-2 p-5 shadow-3xl rounded-lg md:m-5" key={index}>
                <div className="flex justify-end gap-5 pr-3 text-2xl">
                  <a
                    href={item.urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href={item.urlWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <BsBoxArrowUpRight />
                  </a>
                </div>
                <h4 className="font-bold text-xl mt-5">{item.name}</h4>
                <p className="mt-5">{item.desc}</p>
                <ul className="flex gap-2 flex-wrap mt-5 md:gap-4">
                  {item.tools.map((item, index) => {
                    return (
                      <li key={index} className="bg-gray-300 px-3 rounded-xl">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
