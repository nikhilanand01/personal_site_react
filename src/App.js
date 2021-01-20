import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
// import About from './pages/About.js';
import Education from './pages/Education.js';
import Skills from './pages/Skills.js';
import Contact from './pages/Contact.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import {BrowserView, MobileOnlyView} from 'react-device-detect';


function App() {
  return (
  <div>
    <BrowserView>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </div>
      </Router>
    </BrowserView>
    <MobileOnlyView>
      <h2>Mobile Version Coming Soon. For now you can see my site on a desktop!</h2>
    </MobileOnlyView>
  </div>
    );
  }

  export default App;
