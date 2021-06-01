import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        
        return (
            <div className="pokedex">
                {
                <Pokemon key={pokemons[0].id} pokemon={pokemons[0]} />
                }
            </div>
        );
    }
}

export default Pokedex;
