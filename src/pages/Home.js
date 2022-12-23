import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/me.jpeg';




class Home extends Component {
    render() {
        return (
            <div className="condiv home">
              <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
              <ReactTypingEffect className="typingeffect" text={['Hello', "Hola", "Namaste","Bonjour", "Ciao", "Hi"]} speed={120} eraseDelay={500}/>
              <h1>I'm Nikhil</h1>
              <p>Currently Located: New York, New York</p>
              <p class="lead mb40">Always learning: I am recently completed my Master’s degree at <a className="copy-link" rel="noopener noreferrer" href="https://www.berklee.edu/graduate/master-arts-global-entertainment-and-music-business" target="_blank">Berklee College of Music studying Global Entertainment and Music Business</a>. Recently I graduated from <a className="copy-link" rel="noopener noreferrer" href="http://www.babson.edu/Pages/default.aspx" target="_blank">Babson</a> and <a className="copy-link" rel="noopener noreferrer" href="http://www.olin.edu/" target="_blank"> Olin College</a> with Business Administration and Computer Engineering Degrees.</p>
              <p>
                Constantly working: Currently work on the Data team at United Talent Agency.
              </p>
            </div>
            )
        }
    }

export default Home
