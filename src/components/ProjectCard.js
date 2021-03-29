import React, { Component } from 'react'

class ProjectCard extends Component {
    render() {
        return (
            <div class="ProjectCard">
              <div class="card js-card">
                <div class="card__image">
                  <div class="responsive-media responsive-media--widescreen">
                    <img src={this.props.image} alt="project logo" />
                  </div>
                  <div class="card__image-decoration">
                    <div class="label">{this.props.label}</div>
                  </div>
                </div>
                <div class="card__content">
                  <h2 class="card__heading">
                    <a class="card__link" href={this.props.link} target="_blank">{this.props.projectName}</a>
                  </h2>
                  <a href={this.props.link} target="_blank" class="card__category" style={{padding: '10px'}}>{this.props.category}</a>
                  <div class="card__description">
                    <p style={{fontSize: '15px'}}>{this.props.description}</p>
                  </div>
                </div>
                <ul class="card__actions">
                  <li class="card__action">
                    <a href={this.props.link} target="_blank" class="button">See More</a>
                  </li>
                </ul>
              </div>
            </div>

            )
        }
    }

export default ProjectCard
