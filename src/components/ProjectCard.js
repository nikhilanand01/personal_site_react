import React, { Component } from 'react'

class ProjectCard extends Component {
    render() {
        return (
            <div class="ProjectCard">
              <div class="compProj">
                <img src={this.props.image} alt="Project Pic" className="projectpic"></img>
                <h3>{this.props.title}</h3>
                <h4 class="secondtext">Type: {this.props.type}</h4>
                <h4 class="secondtext">Description: {this.props.description}</h4>
                <h4 class="secondtext">Team Size: {this.props.teamSize}</h4>
                <h4 class="secondtext"><a href={this.props.link} target="_blank" rel="noopener noreferrer" className="projectLink">Project Link</a></h4>
              </div>
            </div>
            )
        }
    }

export default ProjectCard
