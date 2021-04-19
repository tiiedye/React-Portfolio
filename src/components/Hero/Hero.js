import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="hero text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: {duration: .8}}}
    >
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
        <a
          href="https://www.linkedin.com/in/julia-jace-clements/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in icon"></i>
        </a>
        <a
          href="https://github.com/tiiedye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github icon"></i>
        </a>
        <a
          href="https://twitter.com/tiiedye_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter icon"></i>
        </a>
      </p>
    </motion.div>
  );
}

export default Hero;
