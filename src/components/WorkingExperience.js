import React from "react";

export default function WorkingExperience() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-3">
          <hr className="hrr"></hr>
        </div>
        <div className="col-6">
          <p className="text-center">WORK EXPERIENCE</p>
        </div>
        <div className="col-3">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">
            September 2020 - Present
          </p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>Software Developer Intern</strong>
            <br />
            ZUBI INFOTECH PRIVATE LIMITED
            <br />
            <span className="font-italic">
              Responsible for build REST APIs in Node.js, Express.js and
              MongoDB, and integrating React-Admin with DataProvider.
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">May 2020 - Present</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>Slack Upskilling Community Manager</strong>
            <br />
            SKILLSANTA
            <br />
            <span className="font-italic">
              Manage Slack channel. Solve doubts of students and Posts quizzes
              and assignment.
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">
            May 2020 - July 2020
          </p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>Backend Development Intern</strong>
            <br />
            GIRLSCRIPT FOUNDATION
            <br />
            <span className="font-italic">
              Built REST APIs for E-learning platform in Node.js, Express.js and
              MongoDB
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
