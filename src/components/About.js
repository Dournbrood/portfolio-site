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
          I am an aspiring full-stack developer from rural Pennsylvania. I enjoy
          playing video games, favoring VR titles like Beat Saber or cellular
          automation games like Factorio and Satisfactory. At work, I
          particularly enjoy mentoring others, reviewing code, and have great
          experience with the AGILE workflow. Learning new things is
          first-nature to me, and I am more than happy to pick up new
          frameworks, utilities and libraries.
        </p>
      </div>
    </div>
  );
};

export default About;
