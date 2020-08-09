import React from "react";
import "./App.css";
import SkillsComponent from "./components/SkillsComponent";
import EducationComponent from "./components/EducationComponent";
import WorkingExperience from "./components/WorkingExperience";
import ProjectComponent from "./components/ProjectComponent";
import ContactComponent from "./components/ContactComponent";
import CertficatesComponents from "./components/CertficatesComponents";

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
          <WorkingExperience />
          <EducationComponent />
          <ProjectComponent />
          <CertficatesComponents />
          <ContactComponent />
        </div>
        <div className="col-12 col-sm-4 offset-1 position-static">
          <h1>Card</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
