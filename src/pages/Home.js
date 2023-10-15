import React from "react";
import './Home.css'
import { Link } from "react-scroll";

function Home() {
    return (
        <section id="home">
            <div className="home-text">
                <h3 id="h3">Hello, I'm</h3>
                <h1 id="h4">Vanessa Kasei</h1>
                <h2 id="h2">Frontend Developer</h2>
            </div>
            <div className="button-container">
                <Link to="contact">
                    <button id="button">Let's connect!</button>
                </Link>
            </div>
            <div id="icons">    
                <a href="https://api.whatsapp.com/send?phone=+254710705715" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-whatsapp" id="whatsapp-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/vanessa-kasei-ba91b8237/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" id="linkedin-icon"></i>
                </a>
                <a href="https://twitter.com/coderonX" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" id="twitter-icon"></i>
                </a>
                <a href="https://github.com/VanessaKasei" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" id="github-icon"></i>
                </a>
            </div>
        </section>
    );
}

export default Home;