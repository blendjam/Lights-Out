import React, { Component } from 'react'
import PokeCard from './PokeCard';
export default class PokeDex extends Component {
    render() {
        const { pokeCards, exp, isWinner} = this.props;
        return (
            <div>
                <p> Total EXP : {exp} </p>
                {isWinner ? <h1> Winner </h1>: <p> Loser </p>}
                <div className="PokeDex">
                    {
                        pokeCards.map(poke => {
                            return <PokeCard poke={poke} key={poke.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}
