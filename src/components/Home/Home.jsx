import React from 'react'
import "./home.css"

export const Home = () => {
  return (
    <div id="homeSection">
      <br/><br/><br/>
      <div className="homeContent">
        <div className="homeText">
          <h1 className="greeting1">Hello!!!</h1>
          <h1 className="greeting2">I am Shashank Shetty</h1>
          <h1 className="greeting3">I am a Software Developer</h1>
        </div>
        <img src="/my-portfolio/assets/profile-picture.JPG"></img>
      </div>
    </div>
  );
}
