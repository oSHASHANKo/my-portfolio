import React from 'react';
import "./projects.css";

export const Projects = () => {
  const projectData = [
    {
      title: "My Portfolio",
      image: "/my-portfolio/assets/my-portfolio.png",
      githubLink: "https://github.com/oSHASHANKo/my-portfolio.git",
    },
  ];
  
  return (
    <div id="projectsSection">
      <br/><br/><br/>
      <h1>My Projects</h1>
      <h2>Have a look at my work</h2>
      <div className="projectCards">
        {projectData.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
