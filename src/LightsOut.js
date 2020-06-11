import React, { Component } from 'react'
import './LightsOut.css';
import LightGrid from './LightGrid';

export default class LightsOut extends Component {
    render() {
        return (
            <div>
                <h2>Lights</h2>
                <h1 className="out">Out</h1>
                <LightGrid />
            </div>
        )
    }
}
