import React, { Component } from 'react';
import WorkCard from '../components/WorkCard.js';

class Experience extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Experience</h1>
              <WorkCard title="Intern" company="T-Series" location="Remote (HQ: New Delhi, India)" from="01.2021" to="Present"/>
              <WorkCard title="Business Development Intern" company="Jingle Punks" location="Remote (HQ: New York, NY)" from="09.2020" to="12.2020"/>
              <WorkCard title="Seminar Instructor; Behind The Playlist Music Business 101" company="Babson College" location="Wellesley, MA" from="11.2019" to="03.2020"/>
              <WorkCard title="Growth Marketing Intern" company="SeatGeek" location="New York, NY" from="06.2019" to="08.2019"/>
              <WorkCard title="Head of Project Management; Employee #1" company="JINN llc." location="Boston, MA" from="11.2016" to="09.2018"/>
            <a href="https://google.com/" style={{color: 'grey'}}><h4 style={{fontStyle: 'italic', textDecoration: 'underline'}}>Get Paper Resume</h4></a>
            </div>
            )
        }
    }

export default Experience
