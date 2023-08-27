import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const listNav = [
  {
    name: "Home",
    url: "#hero",
  },
  {
    name: "Project",
    url: "#project",
  },
  {
    name: "Skill",
    url: "#skill",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];
const Navbar = () => {
  const [burger, isBurger] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        isBurger(true);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <BrowserRouter>
      <nav className="p-6 absolute top-0 w-full z-10">
        <button
          className="text-xl md:hidden hover:bg-black hover:text-white p-2 rounded"
          onClick={() => isBurger(!burger)}
        >
          {burger ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
        <ul
          className={
            burger ? `hidden md:flex items-center justify-center` : `block`
          }
        >
          {listNav.map((item, index) => {
            return (
              <Link to={item.url} smooth>
                <li
                  key={index}
                  className="ml-8 hover:bg-black hover:text-white p-2 rounded text-base md:text-lg"
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
