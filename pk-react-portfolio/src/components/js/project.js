import React from "react";
import "./css/project.css";
import App1 from "./Assets/istockphoto-988302516-612x612.jpg"
import App2 from "./Assets/339840_stock-photo-bubble-quiz.jpg"
import App3 from "./Assets/depositphotos_11043046-stock-photo-closeup-of-calendar-page.jpg"
import App4 from "./Assets/depositphotos_392432574-stock-photo-info-speech-bubble-isolated-red (1).jpg"

const Project = () => {
  return (
    <div class="proj-container">
      <h2>Sample Work</h2>
      <div class="block-images">
        <div class="img">
          <a
            href="https://github.com/paynekerz/Weather-Dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={App1}
              alt="Weather Dashboard"
              width="300"
              height="300"
            />
          </a>
        </div>
        <div class="img">
          <a href="https://github.com/paynekerz/CodeQuiz" target="_blank" rel="noreferrer">
            <img
              src={App2}
              alt="Code Quiz"
              width="300"
              height="300"
            />
          </a>
        </div>
        <div class="img">
          <a
            href="https://github.com/paynekerz/Work-Day-Scheduler"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={App3}
              alt="Work Day Scheduler"
              width="300"
              height="300"
            />
          </a>
        </div>
        <div class="img">
          <a
            href="https://github.com/paynekerz/READMEGenerator"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={App4}
              alt="README Generator"
              width="300"
              height="300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
