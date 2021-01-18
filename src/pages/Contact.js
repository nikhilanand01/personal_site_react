import React, { Component } from 'react';
import Social from '../components/Social.js';


class Contact extends Component {
    render() {
        return (
            <div className="condiv">
              <h1 className="subtopic">Contact Me</h1>
              <h3>Email: <a  href="mailto:nanand@berklee.edu" style={{color: 'black'}}>nanand@berklee.edu</a></h3>
              {/* <Social /> */}
            </div>
            )
        }
    }

    export default Contact
