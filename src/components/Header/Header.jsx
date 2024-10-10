import React from "react";
import "./header.css"

export const Header = ({ testprop }) => {
  return (
    <header className="header">
      <span className="domain">Hello!!! I am Shashank</span>
      <span className="navs">
        <a id="homeNav" href="#homeSection">
          Home
        </a>
        <a id="aboutNav" href="#aboutSection">
          About
        </a>
        <a id="projectsNav" href="#projectsSection">
          Projects
        </a>
        <a id="contactsNav" href="#contactsSection">
          Contacts
        </a>
      </span>
    </header>
  );
};
