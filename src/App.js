import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-white text-black font-Rubik">
      <Navbar />
      <Hero />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
