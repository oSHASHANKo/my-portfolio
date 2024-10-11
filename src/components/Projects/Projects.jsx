import React from 'react';
import "./projects.css";

export const Projects = () => {
  const projectData = [
    {
      title: "My Portfolio",
      image: "./src/assets/my-portfolio.png",
      githubLink: "https://github.com/yourusername/project-one",
    },
  ];
  
  return (
    <div id="projectsSection">
      <h1>My Projects</h1>
      <h2>Have a look at my work</h2>
      <div className="projectCards">
        {projectData.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
