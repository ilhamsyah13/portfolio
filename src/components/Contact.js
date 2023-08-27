import React from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center mt-10">
      <div className="container w-10/12 mt-10">
        <h4 className="text-4xl font-black text-center border-black border-solid border-b-4 leading-[0.1em]">
          <span className="bg-white p-4">Contact Me</span>
        </h4>
        <div>
          <h4 className="text-xl  text-center mt-10 bg-gray-300 rounded-lg p-5 md:mx-20">
            ilham1304syah@gmail.com
          </h4>
          <div className="text-4xl text-center ">
            <span className="flex text-4xl justify-center gap-4 my-12">
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
