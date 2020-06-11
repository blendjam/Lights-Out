import React, { Component } from 'react'

export default class LightBox extends Component {
    render() {
        return (
            <div className={
                `LightBox ${this.props.isON ? "ON" : ""}`}
                onClick={this.props.onClick}
                id={this.props.id}
                >
            </div>
        )
    }
}
