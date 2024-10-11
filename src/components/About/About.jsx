import React from 'react'
import "./about.css"

export const About = () => {
  return (
    <div id="aboutSection">
      <br/><br/><br/>
      <div className="aboutContent">
          <h1>About me</h1>
          <h2>Hi I am Shashank Shetty</h2>
          <p>
            I'm currently an intern in a software developer role at ResMed,
            where I work with a diverse tech stack that includes Java, C, C++,
            C#, React, and Node. My passion for technology is driven by a desire
            to create impactful solutions and continuously learn new skills. I
            thrive in dynamic environments that challenge my problem-solving
            abilities and allow me to collaborate with talented teams.<br/><br/>
            Outside of coding, I love to stay active and creative. I'm an avid dancer,
            singer, and enjoy playing both indoor and outdoor games. Chess is
            one of my favorite indoor activities, while on the field, I enjoy
            sports like volleyball, football, and kabaddi.<br/><br/>
            Whether I'm writing code or playing a game, I believe in the importance of teamwork,
            focus, and a constant drive to improve. I'm always eager to take on
            new challenges and explore innovative ways to make a difference.
          </p>
      </div>
      <a href="/my-portfolio/assets/RESUME_PDF.pdf" download>
        <button className="resume">Download Resume</button>
      </a>
    </div>
  );
}
