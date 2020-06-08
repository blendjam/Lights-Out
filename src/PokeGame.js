import React, { Component } from 'react'
import { pokeData } from './pokedata';
import PokeDex from './PokeDex';
export default class PokeGame extends Component {
    render() {
        const hand1 = [];
        const hand2 = [...pokeData];

        while (hand1.length < hand2.length) {
            const randIndex = Math.floor(Math.random() * hand2.length);
            const randPoke = hand2.splice(randIndex, 1)[0];
            hand1.push(randPoke);
        }

        const exp1 = hand1.reduce((acc, cur) => {
            return cur.base_experience + acc
        }, 0)

        const exp2 = hand2.reduce((acc, cur) => {
            return cur.base_experience + acc
        }, 0)


        return (
            <div className="PokeGame">
                <PokeDex pokeCards={hand1} exp={exp1} isWinner={exp1 > exp2 ? true : false} />

                <PokeDex pokeCards={hand2} exp={exp2} isWinner={exp2 > exp1 ? true : false} />
            </div>
        )
    }
}
