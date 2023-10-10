import React from "react";
import PassportPhoto from "./Images/PassportPhoto.jpg";

function About() {
  return (
    <section className="bg-gray-100 p-5" id="about">
      <div className="container mx-auto">
        <h1 className="font-extrabold font-sans text-center text-3xl mb-4">
          About Me
        </h1>
        <div className="about-container max-w-full">
          <img src={PassportPhoto} className="max-w-20% h-auto" alt="me" />
          <p className="max-w-2xl mt-5 text-lg text-gray-700">
            I am a highly skilled and competent web and mobile app developer with a 
            focus in creating responsive, visually appealing and user-friendly applications
            that meet the users requirements using technologies such as JavaScript, ReactJs,
            TailwindCSS and Flutter. Let's connect and explore how we can innovate and create
            teogether.
          </p>
        </div>
        <div className="resume mt-5">
          <a
            href="https://drive.google.com/file/d/1ZjOGyQyyddmtooy4q4fNvNPEf-rMchFe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="rounded-lg bg-blue-800 text-white py-2 px-4 transition-transform duration-200 hover:scale-90"
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
