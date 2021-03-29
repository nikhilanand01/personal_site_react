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
                <ProjectCard image={whatsmystream} label="Website" category="ReactJS" link="https://whatsmystream.com" projectName="What's My Stream" description="A Music Streaming Calculator"/>
                <ProjectCard image={fiveDot} label="Website" category="HTML/CSS" link="https://5degreestravel.com" projectName="5 Degrees Travel" description="Travel Blog / Reccomendations"/>
                <ProjectCard image={billi} label="Data Analysis" category="R" link="#" projectName="Top 10?" description="Predicting Billboard Hot 100 Top 10 Songs"/>
                <ProjectCard image={hacks} label="Mobile App" category="React Native" link="https://github.com/nikhilanand01/outsidehacks" projectName="Outside Hacks" description="Scavenger Hunt for Outside Lands Hackathon"/>
                <ProjectCard image={fud} label="Mobile App" category="Swift"  link="#" projectName="fud" description="App to lower food waste with discounts"/>
                <ProjectCard image={lboard} label="Mobile App" category="React Native" link="#" projectName="LBoard" description="App to share embarssing moments with friends"/>
              </div>
            </div>
            )
        }
    }

export default Projects
