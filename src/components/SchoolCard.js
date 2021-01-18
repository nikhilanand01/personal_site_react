import React, { Component } from 'react'

class SchoolCard extends Component {
    render() {
        return (
            <div class="SchoolCard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <h4 class="secondtext">{this.props.school}</h4>
            <h4 class="secondtext">{this.props.location}</h4>
            <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
            </div>
            </div>
            )
        }
    }

export default SchoolCard
