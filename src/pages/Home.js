import React from "react";
import './Home.css'
import { Link } from "react-scroll";
//import homepage3 from "./Images/homepage3.jpg";

function Home() {
    return (
        <section id="home">
            {/*<div className="image-container">
                <img src={homepage3} id="image" alt="my pic" />
            </div>*/}
            <div className="home-text">
                <h3 id="h3">Hello, I'm</h3>
                <h1 id="h4">Vanessa Kasei</h1>
                <h2 id="h2">Front-end Developer</h2>
            </div>
            <div className="button-container">
                <Link to="contact">
                    <button id="button">Let's connect!</button>
                </Link>
            </div>
        </section>
    );
}

export default Home;