import React from "react";
import "./maincontent.css";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Contacts } from "../Contacts/Contacts";

export const MainContent = () => {
  return (
    <div className="main-content">
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
};
