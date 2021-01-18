import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'programmingSkills':['ReactJS','R','SQL','Javascript', 'HTML5', 'CSS3', 'Python'],
            'skills':['Hindi (Native)','Spanish (Intermediate)','Tableau', 'Looker', 'Sketch', 'Adobe Photoshop'],
            'experienceWith':['Google Analytics', 'Facebook Ads Manager', 'Apple Search Ads', 'Google UAC', 'JIRA/Confluence', 'Agile Methodology']
        };
    }

    render() {
        return (
            <div className="condiv skills">
              <h1 className="subtopic">My Skills</h1>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="skillSet">
                  <h5>Programming Skills</h5>
                  <ul>
                  {this.state.programmingSkills.map((value)=>{
                      return <li>{value}</li>
                  })}
                  </ul>
                </div>
                <div className="skillSet">
                  <h5>Other Skills</h5>
                  <ul>
                  {this.state.skills.map((value)=>{
                      return <li>{value}</li>
                  })}
                  </ul>
                </div>
                <div className="skillSet">
                  <h5>Experience With</h5>
                  <ul>
                  {this.state.experienceWith.map((value)=>{
                      return <li>{value}</li>
                  })}
                  </ul>
                </div>
              </div>
            </div>
            )
        }
    }

export default Skills
