import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard.js';
import whatsmystream from '../images/wmslogo.png';
import fiveDot from '../images/5dot_logo.png';
import billi from '../images/billboard.png';
import hacks from '../images/logo_noback.png';
import lboard from '../images/elthephantwhite.png';
import fud from '../images/hamburger.png';

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
              <h1 className="subtopic">My Projects</h1>
              <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <ProjectCard image={whatsmystream} title="What's My Stream?" type="Web App (ReactJS)" description="Music Streaming Calculator" teamSize="4" link="https://whatsmystream.com"/>
                <ProjectCard image={fiveDot} title="5 Degrees of Travel" type="Website (HTML/CSS)" description="Travel Blog" teamSize="1" link="https://5degreestravel.com"/>
                <ProjectCard image={billi} title="Top 10?" type="R Program" description="Predicting Billboard Hot 100 Top 10 Songs" teamSize="5"/>
                <ProjectCard image={hacks} title="Outside Hacks (for Outside Lands Music Festival)" type="Mobile App (React Native)" description="Creating a Scavenger Hunt App for Outside Lands" teamSize="5" link="https://github.com/nikhilanand01/outsidehacks"/>
                <ProjectCard image={fud} title="fud" type="Mobile App (Swift)" description="App to lower food waste with discounts" teamSize="2"/>
                <ProjectCard image={lboard} title="LBoard" type="Mobile App (React Native)" description="App to share embarssing moments with friends" teamSize="3"/>
              </div>
            </div>
            )
        }
    }

export default Projects
