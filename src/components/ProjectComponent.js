import React from "react";

export default function ProjectComponent() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
        <div className="col-4">
          <p className="text-center">PROJECTS</p>
        </div>
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">TASKIFY APPLICATION</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            An application build in Node.js, Express.js and MongoDB. It stores
            tasks of the user. It has login and signup functionality. User can
            create, read, update and delete tasks.{" "}
            <a
              className="font-italic"
              href="https://github.com/raushan606/Taskify"
            >
              Github
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">YOUTUBE DOWNLOADER</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            A desktop application built using Tkinter. It can download youtube
            video in high or low quality on entered URL.{" "}
            <a
              className="font-italic"
              href="https://github.com/raushan606/YouTube_Downloader"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">RNEWS</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            It is a news app in Java. It fetches data from Newsapi.org. It shows
            news realted to technology.{" "}
            <a
              className="font-italic"
              href="https://github.com/raushan606/RNews"
            >
              Github
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">COVID-19 HELPER</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            This is web application built in React.js. It will show current
            stats and help you in finding help from government.{" "}
            <a
              className="font-italic"
              href="https://github.com/raushan606/Covid-Project"
            >
              Github
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">PORTFOLIO</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            This is my personal portfolio site. Built using HTML, CSS,
            JavaScript and Bootstrap4.{" "}
            <a className="font-italic" href="https://raushan606.github.io/">
              Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
