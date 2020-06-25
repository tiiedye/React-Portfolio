import React from "react";

function Contact() {
    return (
      <div className="container">
        <h1>Contact Me</h1>

        <div className="container text-center">
          <p>
            <h5>Email</h5>

            <a href="mailto:tiiedye@gmail.com" target="_blank" rel="noopener noreferrer">
                tiiedye@gmail.com
            </a>
          </p>
          <p>
            <h5>Phone</h5>
            (818)-534-7777
          </p>

          <p>
            <a href="https://www.linkedin.com/in/julia-clements-26a2201a6/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in iconC"></i></a>
            <a href="https://github.com/tiiedye" target="_blank" rel="noopener noreferrer"><i className="fab fa-github iconC"></i></a>
            <a href="https://twitter.com/tiiedye_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter iconC"></i></a>
          </p>
        </div>
      </div>
    );
}

export default Contact;