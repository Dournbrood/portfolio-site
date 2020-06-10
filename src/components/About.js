import React from "react";

const About = () => {
  //Render
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
      }}
    >
      <div>
        <h2 className="inverted">About</h2>
      </div>
      <div className="container">
        <p>
          Some stuff about me. Moo. I have built projects using Javascript,
          React.js, React-Native, Node, Express and Python.
        </p>
      </div>
    </div>
  );
};

export default About;
