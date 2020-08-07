import React from "react";
import "./App.css";
import SkillsComponent from "./components/SkillsComponent";
import EducationComponent from "./components/EducationComponent";
import WorkingExperience from "./components/WorkingExperience";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-sm-7">
          <h2 className=" text-center">Resume</h2>
          <h5 className="font-weight-normal text-center text-secondary">
            Raushan Kumar
          </h5>
          <SkillsComponent />
          <EducationComponent />
          <WorkingExperience />
        </div>
        <div className="col-12 col-sm-4 offset-1 position-static">
          <h1>Card</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
