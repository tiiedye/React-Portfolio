import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero text-center">
            <h1>Julia "Jace" Clements</h1>
            <h2>Full-Stack Developer</h2>

            <p>
                <Link to="/about">
                    <button type="button" className="btn btn-light">
                        Learn More About Me
                    </button>
                </Link>
            </p>

            <p>
                <a href="https://www.linkedin.com/in/julia-clements-26a2201a6/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in icon"></i></a>
                <a href="https://github.com/tiiedye" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
                <a href="https://twitter.com/tiiedye_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter icon"></i></a>
            </p>
        </div>
    )
}

export default Hero;