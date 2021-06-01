import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import FilterButton from './FilterButton';
import './Pokedex.css';

class Pokedex extends React.Component {
	constructor(props) {
		super();

		this.state = {
			listIndex: 0,
		}

		this.nextHandle = this.nextHandle.bind(this);
	}

	nextHandle = () => {
		if (this.state.listIndex !== this.props.pokemons.length - 1) {
			this.setState((pervState, _props) => ({
				listIndex: pervState.listIndex + 1,
			}));
		} else {
			this.setState((_props) => ({
				listIndex: 0,
			}));
		}
	}

	render() {
		const { pokemons } = this.props;

		return (
			<div className="pokedex">
				<Pokemon pokemon={pokemons[this.state.listIndex]} />

				<div className="type-list">
					<FilterButton type="Fire" />
					<FilterButton type="Psychic"/>
				</div>

				<NextButton handle={this.nextHandle} />
			</div>
		);
	}
}

export default Pokedex;
