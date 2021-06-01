import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;

        return (
            <div className="pokedex">
                <Pokemon key={pokemons[0].id} pokemon={pokemons[0]} />
                <Button />
            </div>
        );
    }
}

export default Pokedex;
