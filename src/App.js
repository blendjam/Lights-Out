import React, { Component } from 'react'
import SearchBox from './SearchBox';
import PokeGame from './PokeGame';

export default class App extends Component {
    render() {

        return (
            <div className="App">
                <img src="https://fontmeme.com/permalink/200608/1a7a0258bf98cddb1f60e8d364f1047d.png" alt="Pokemon-Logo" />
                <PokeGame />
            </div>
        )
    }
}
