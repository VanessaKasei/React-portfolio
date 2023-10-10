import React from "react";
import "./Skills.css";
import htmllogo from "./Images/htmllogo.png";
import css1 from "./Images/css1.png";
import js1logo from "./Images/js1logo.png";
import reactlogo from "./Images/reactlogo.png";
import figma1logo from "./Images/figma1logo.png";
import firebase1logo from "./Images/firebase1logo.png";

function Skills() {
    return (
        <div className="skills-container" id="skills">
            <h1 id="my-skills">SKILLS</h1>
            <div className="row1">
                <img src={htmllogo} id="html" alt="html logo" />
                <img src={css1} id="css" alt="css logo" />
                <img src={js1logo} id="js" alt="javascript logo" />
            </div>
            <div className="row2">
                <img src={reactlogo} id="react" alt="react logo" />
                <img src={figma1logo} id="figma" alt="figma logo" />
                <img src={firebase1logo} id="firebase" alt="firebase logo" />
            </div>
        </div>
    );
}

export default Skills;