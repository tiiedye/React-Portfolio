import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
