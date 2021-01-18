import React, { Component } from 'react';
import SchoolCard from '../components/SchoolCard.js';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <SchoolCard title="Masters of Arts, Global Entertainment & Music Business" school="Berklee College of Music" location="Valencia, Spain" from="2020" to="Present"/>
            <SchoolCard title="Bachelors of Science, Business Administration" school="Babson College" location="Wellesley, MA" from="2016" to="2020"/>
            <SchoolCard title="Certificate Degree, Computer Engineering" school="Olin College of Engineering" location="Wellesley, MA" from="2017" to="2020"/>
            <SchoolCard title="Exchange Semester" school="Bocconi Univsersity" location="Milan, Italy" from="01.2019" to="06.2019"/>
            <SchoolCard title="Exchange Semester" school="Erasmus Univsersity, Rotterdam School of Management" location="Rotterdam, Netherlands" from="09.2018" to="12.2018"/>
            <SchoolCard title="Web & Mobile Development" school="Horizons School of Technology" location="San Fransisco, California" from="06.2017" to="08.2017"/>
            </div>
            )
        }
    }

export default Education
