import React from "react";
import "./css/navbar.css";

const navBar = () => {
  return (
    <nav class="nav navbar navbar-expand-lg navbar-light bg-light">
      <h1>Payne Kerz</h1>
      <div class="container-fluid">
        <ul>
          <li>
            <a
              class="navbar-brand"
              href="https://github.com/paynekerz"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a class="nav-link" href="#aboutMe">
              About Me
            </a>
          </li>
          <li>
            <a class="nav-link" href="#contactInfo">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;
