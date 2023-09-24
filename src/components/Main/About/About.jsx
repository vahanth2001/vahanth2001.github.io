import React from "react";
import "./About.scss";
import EducationCard from "../../educationCard/EducationCard";
import {educationInfo,illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../Lotties/build.json";
import DisplayLottie from "../../displayLottie/DisplayLottie";

function About() {
  if (educationInfo.display) {
    return (
      <div>
        <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
        <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie path={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
      </div>
    );
  }
  return null;
}

export default About