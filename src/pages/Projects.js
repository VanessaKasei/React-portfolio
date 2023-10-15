import React from "react";
import './Projects.css'

function Projects() {
    return(
        <section id="projects">
            <h1 id="main-title">Projects 
            </h1>
                <div className="container">
                    <div className="content-section">
                        <div className="rows11">
                        <div className="card">
                            <h2 className="p1">Uprime Designs Landing Page</h2>
                            <p>This is a simple landing page for a Design company
                                that showcases my ability to turn designs into code.
                                I created it using ReactJs and CSS 
                            </p>
                            <a href="https://vanessakasei.github.io/Upright/" target="_blank" rel="noopener noreferrer">
                            <button className="view-button">View Project</button>  
                            </a>
                        </div>
                        <div className="card">
                            <h2 className="p2">Home listing website</h2>
                            <p>This is a home listing website that shows the users 
                                the different houses available and some of its 
                                features. It was created using Reactjs and CSS.
                            </p>
                            <a href="https://vanessakasei.github.io/React/" target="_blank" rel="noopener noreferrer">
                            <button className="view-button">View Project</button>
                            </a>
                        </div>
                        <div className="card">
                            <h2 className="p3">Website portfolio</h2>
                            <p>This is a website that showcases my skills, projects
                                that I have worked on and experience.
                            </p>
                            <a href="https://vanessakasei.github.io/React-portfolio" target="_blank" rel="noopener noreferrer">
                            <button className="view-button">View Project</button>
                            </a>
                        </div>
                        </div>
                        {/*<div className="card">
                            <h2 className="p4">Precious Gifts</h2>
                            <p>This is a donation application created using Flutter.
                                Users are able to make donations easily to various 
                                children's homes by a allowing them to place their 
                                donations at various pick-up centers which will later 
                                on be picked.
                            </p>
                            <a href="https://vanessakasei.github.io/React/" target="_blank" rel="noopener noreferrer">
                            <button className="view-button">Yet to be deployed</button>
                            </a>
                        </div>*/}
                    </div>    
                </div>    
        </section>
    );
}

export default Projects;

