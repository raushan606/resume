import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function ContactComponent() {
  return (
    <div className="mb-4">
      <div className="row mt-4">
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
        <div className="col-4">
          <p className="text-center">CONTACT</p>
        </div>
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <a href="https://github.com/raushan606" >
            <FontAwesomeIcon color="black" className="mx-2" icon={faGithub} />
          </a>
          <a href="https://twitter.com/_var_const" >
            <FontAwesomeIcon color="black" className="mx-2" icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/raushan606/" >
            <FontAwesomeIcon color="black" className="mx-2" icon={faLinkedin} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
