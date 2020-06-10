import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

const Homepage = (props) => {
  //do stuff

  //render JSX
  return (
    <>
      <Hero />
      <div className="non-nav">
        <About />
        <Projects />
      </div>
    </>
  );
};

export default Homepage;
