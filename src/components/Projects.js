import React from "react";

const Projects = (props) => {
  //Render
  return (
    <div className="projects">
      <div>
        <h2 className="inverted">Projects</h2>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.lambdaschool.mydish"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>MyDish</h3>
      </a>
      <div className="project-container">
        <a
          className="project-img"
          href="https://play.google.com/store/apps/details?id=com.lambdaschool.mydish"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/mydishcover.png"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
        <div className="project-details">
          <div className="container" style={{ marginBottom: "0" }}>
            <p>
              MyDish is a social networking platform aimed at making the
              creation, editing, and sharing of personal recipes easier through
              a digital medium. I was responsible for refactoring the
              application's global state handlers as well as writing many new
              front-end components such as the one you see here. This component
              contains the information from a user's recipe.
              <br />
              <br />
              Tech Stack:
              <ul>
                <li>React-Native</li>
                <li>Redux</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Expo</li>
                <li>AWS-S3</li>
                <li>SQL</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://weightlifting.now.sh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Weightlifting Journal</h3>
      </a>
      <div className="project-container">
        <a
          href="https://weightlifting.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="project-img"
        >
          <img
            alt="Weightlifting Journal cover. Two individuals are shown performing anaerobic exercise routines."
            href="https://weightlifting.now.sh"
            src="/weightliftingjournalcover.png"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
        <div className="project-details">
          <div className="container" style={{ marginBottom: "0" }}>
            <p>
              Weightlifting Journal is digital workout platform aimed at making
              advanced workout routines and techniques more accessible to the
              average user. After signing up for free, users can browse preset
              routines or custom workouts written by other users. I was
              responsible for writing the components that handle user
              signup/login as well as the workout plan editor.
              <br />
              <br />
              Tech Stack:
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>NodeJS</li>
                <li>Express</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/Build-Week-Med-Cabinet-4/back-end"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Med Cabinet</h3>
      </a>
      <div className="project-container">
        <a
          href="https://github.com/Build-Week-Med-Cabinet-4/back-end"
          target="_blank"
          rel="noopener noreferrer"
          className="project-img"
        >
          <img
            alt="Med Cabinet code snippet."
            href="https://github.com/Build-Week-Med-Cabinet-4/back-end"
            src="/medcabinetcode.PNG"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
        <div className="project-details">
          <div className="container" style={{ marginBottom: "0" }}>
            <p>
              Med Cabinet is a platform aimed at helping new patients find the
              right strains, dosing, intake method and intake schedule for
              medicinal cannabis. I personally contributed most of the back-end
              documentation as well as the user authentication endpoints,
              database resource endpoints, and the relational SQL database
              structure.
              <br />
              <br />
              Tech Stack:
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>SQL</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
