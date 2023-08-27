import React from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className="h-screen relative flex justify-center items-center"
      id="hero"
    >
      <div className="container w-10/12 text-xl leading-relaxed grid grid-cols-2 justify-between md:text-3xl">
        <div className="m-auto">
          <h1>Hello,</h1>
          <h1>
            I am <span className="font-bold">Muhammad Ilhamsyah Putera</span>
          </h1>
          <h1>Front End Developer</h1>
        </div>
        <img
          src="./image/image.png"
          alt="heroImage"
          className="w-full md:w-4/6 m-auto"
        ></img>
      </div>
      <div className="flex justify-between items-center absolute bottom-16 w-10/12">
        <div className="flex text-3xl gap-4 ">
          <a
            href="https://www.linkedin.com/in/muhammad-ilhamsyah-putera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/ilhamsyah13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>

          <a
            href="https://www.instagram.com/ilhamsyah1304/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </div>
        <p className="text-base md:text-lg">ilham1304syah@gmail.com</p>
      </div>
    </div>
  );
};

export default Hero;
