import React from "react";
import './Projects.css'

function Projects({title, deploymentLink}) {
    return(
        <section id="projects">
            <h1 id="main-title">FEATURED PROJECTS </h1>
            <div className="row1">
                <div className="project-card1">
                    <h3>{title}</h3>
                    <h2 className="p1">Uprime Designs Landing Page</h2>
                    <p>This is a simple landing page for a Design company
                        that showcases details about the company such as 
                        their contact and various social media platforms and generally
                        the kind of designs that the are able to come up with.
                        I created it using ReactJs for interactivity, CSS for styling and
                        HTML
                    </p>
                    <a href="https://vanessakasei.github.io/Upright/" target="_blank" rel="noopener noreferrer">
                    <button className="view-button">View Project</button>  
                    </a>
                </div>
                <div className="project-card1">
                    <h2 className="p2">Home listing website</h2>
                    <p>This is ahome listing website taht shows the users the different
                        houses available plus some of the features that it contains. It 
                        was created using Reactjs and CSS.
                    </p>
                    <a href="https://vanessakasei.github.io/React/" target="_blank" rel="noopener noreferrer">
                    <button className="view-button">View Project</button>
                    </a>
                </div>
            </div>
            <div className="row2">
                <div className="project-card1">
                    <h2 className="p3">Website portfolio</h2>
                    <p>This is a website that showcases my work, accomplishments, skills
                        and expertise.
                    </p>
                    <a href="https://vanessakasei.github.io/React-portfolio/" target="_blank" rel="noopener noreferrer">
                    <button className="view-button">View Project</button>
                    </a>
                </div>
                <div className="project-card1">
                    <h2 className="p4">Precious Gifts</h2>
                    <p>This is a donation application created using Flutter. Users are able
                        to make donations easily to various children's homes by a allowing them
                        to place their donations at various pick-up centers which will later on
                        be picked.
                    </p>
                    <a href="https://vanessakasei.github.io/React/" target="_blank" rel="noopener noreferrer">
                    <button className="view-button">Yet to be deployed</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;

