import React from 'react'
import "./projects.css"

export const Projects = () => {
  const projectData = [
    {
      title: "Project One",
      image: "https://via.placeholder.com/150", // Replace with actual project image URLs
      githubLink: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      image: "https://via.placeholder.com/150", // Replace with actual project image URLs
      githubLink: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      image: "https://via.placeholder.com/150", // Replace with actual project image URLs
      githubLink: "https://github.com/yourusername/project-three",
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
            <h3>{project.title}</h3>
            <a href={project.githubLink}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
