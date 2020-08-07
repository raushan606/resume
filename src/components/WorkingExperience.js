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
          <p className="font-weight-bold text-secondary">2018-2022</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>SHARDA UNIVERSITY, Greater Noida, India</strong>
            <br />
            B.Tech, Computer Science & Engineering
            <br />
            <span className="font-italic">GPA: 9.583</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2015-2018</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>G. P. G. COLLEGE, Bihar, India</strong>
            <br />
            Intermediate
            <br />
            <span className="font-italic">Percentage: 64.8</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2015</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>D. A. V. PUBLIC SCHOOL, Bihar, India</strong>
            <br />
            High School <br />
            <span className="font-italic">CGPA: 8.8</span>
          </p>
        </div>
      </div>
    </div>
  );
}
