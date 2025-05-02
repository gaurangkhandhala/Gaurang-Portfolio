import React from "react";
import './Resume.css';

export default function Resume() {
  return (
    <div className="container">
      <div className="Title">
        <h6 className="text-center">The skills I have</h6>
        <h1>Resume</h1>
      </div>

      <div className="education col-lg-12 col-md-12 col-10">
        <h2>
          <i className="bi bi-book"></i> <span>Education</span>
        </h2>
        <div>
          <h4>- GHSEB</h4>
          <h5>2021 - 2022</h5>
          <p>
            Some may opt for vocational courses or enter the workforce directly,
            depending on their qualifications and aspirations.
          </p>
        </div>
        <div>
          <h4>- R J Tibrewal Commerce College</h4>
          <h5>2022 - Ongoing</h5>
          <p>
            The course helps students develop skills in financial management,
            analytical thinking, problem-solving, communication, and
            decision-making.
          </p>
        </div>
        <div>
          <h4>- Red & White Multimedia Education</h4>
          <h5>2023 - 2024</h5>
          <p>
            Front-end web developers play a crucial role in creating engaging
            and user-friendly interfaces for web applications, requiring a blend
            of technical skills, creativity, and attention to detail.
          </p>
        </div>
        <h3>Full Stack</h3>
        <div className="Resume-icon-div col-md-12">
          <div className="Resume-icon">
            <i className="ci ci-html ci-5x"></i> <h4>HTML</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-css ci-5x"></i> <h4>CSS</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-bootstrap ci-5x"></i> <h4>BOOTSTRAP</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-c ci-5x"></i> <h4>C Language</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-js ci-5x"></i> <h4>JAVASCRIPT</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-react ci-5x"></i> <h4>REACT</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-firebase ci-5x"></i> <h4>FIREBASE</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-vscode ci-5x"></i> <h4>VS CODE</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-node ci-5x"></i> <h4>NODE</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-expressjs ci-5x ci-invert"></i> <h4>EXPRESS JS</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-mongodb ci-5x"></i> <h4>MONGODB</h4>
          </div>
          <div className="Resume-icon">
            <i className="ci ci-git ci-5x"></i> <h4>GIT</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
