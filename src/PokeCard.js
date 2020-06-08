import React, { Component } from 'react'

export default class PokeCard extends Component {
    getType(type) {
        switch (type) {
            case 'fire':
                return '🔥';

            case 'water':
                return '💧';

            case 'bug':
                return '🐛';

            case 'flying':
                return '💨';

            case 'electric':
                return '⚡';

            case 'normal':
                return '⚪';

            case 'ghost':
                return '👻';

            default: return;
        }
    }
    render() {
        const padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
        const { poke } = this.props;
        const api = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(poke.id)}.png`;
        return (
            <div className="card">
                <h1> {poke.name}  </h1>
                <img src={api} alt={poke.name} />
                <p> Type: {this.getType(poke.type)} </p>
                <p> EXP: {poke.base_experience} </p>
            </div>
        )
    }
}
