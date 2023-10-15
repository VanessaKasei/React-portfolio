import React from "react";
import PassportPhoto from "./Images/PassportPhoto.jpg";
import './About.css'

function About() {
  return (
    <section id="about">
      <h1 className="title2">
        About Me
        </h1>
        <div className="about-container">
          <img className="myphoto" src={PassportPhoto} alt="me" />
          <p>I'm a passionate web and mobile developer with a strong love for creating
             beautiful and functional digital experiences. I thrive on turning ideas into
             well-crafted websites and applications that not only look great but also 
             provide meaningful solutions using technologies such as JavaScript, ReactJs
             TailwindCSS and Flutter. My approach to web development is to merge creativity
             with functionality.
             Let's build something amazing together!
          </p>
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/1ZjOGyQyyddmtooy4q4fNvNPEf-rMchFe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="download"
            >
              Download Resume
            </button>
          </a>
        </div>
    </section>
  );
}

export default About;
