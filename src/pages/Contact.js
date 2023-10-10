import React from "react";
import './Contact.css'
function Contact () {
    return (
        <section id="contact">
            <h1 id="contact-info">Let's connect!</h1>
            <div id="myicons">
                <i className="fa fa-whatsapp" id="whatsapp-icon"></i>
                <i className="fa fa-linkedin" id="linkedin-icon"></i>
                <i className="fa fa-twitter" id="twitter-icon"></i>
            </div>
            <div className='contact-container'>
                <p id='contact'>Contact me on:  
                <i className='fa fa-phone' id='phone'>  +254 710705715</i></p>
            </div>
        </section>
    );
}

export default Contact;