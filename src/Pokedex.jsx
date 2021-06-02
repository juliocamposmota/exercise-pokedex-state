import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import FilterButton from './FilterButton';
import pokemons from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
	constructor(props) {
		super();

		this.state = {
			listIndex: 0,
			list: pokemons,
		}

		this.nextHandle = this.nextHandle.bind(this);
		this.filterHandle = this.filterHandle.bind(this);
	}

	nextHandle = () => {
		if (this.state.listIndex !== this.state.list.length - 1) {
			this.setState((prevState, _props) => ({
				listIndex: prevState.listIndex + 1,
			}));
		} else {
			this.setState((_props) => ({
				listIndex: 0,
			}));
		}
	}

	filterHandle = (event) => {
		const { pokemons } = this.props;
		const type = event.target.innerText;

		const result = pokemons.filter((pokemon) => pokemon.type === type);

		this.setState(() => ({
			list: result,
		}));
	}

	render() {
		// const { pokemons } = this.props;

		return (
			<div className="pokedex">
				<Pokemon pokemon={this.state.list[this.state.listIndex]} />

				<div className="type-list">
					<FilterButton type="Fire" handle={this.filterHandle} />
					<FilterButton type="Psychic" handle={this.filterHandle} />
				</div>

				<NextButton handle={this.nextHandle} />
			</div>
		);
	}
}

export default Pokedex;
