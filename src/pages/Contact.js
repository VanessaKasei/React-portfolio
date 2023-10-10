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
                <p id='contact'>CONTACT US TODAY:  
                <i className='fa fa-phone' id='phone'>  +254 710705715</i>
                <i className='fa fa-envelope' id='mail'> :kaseivanessa@gmail.com</i></p>
            </div>
        </section>
    );
}

export default Contact;