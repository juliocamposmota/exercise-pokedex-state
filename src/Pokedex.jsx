import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import FilterButton from './FilterButton';
import pokemons from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: pokemons,
			listIndex: 0,
		}

		this.nextHandle = this.nextHandle.bind(this);
		this.filterHandle = this.filterHandle.bind(this);
		this.clearHandle = this.clearHandle.bind(this);
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
			listIndex: 0,
		}));

		if (result.length === 1) {
			const nextButton = document.querySelector('.next-button');
			nextButton.disabled = true;
		} else {
			const nextButton = document.querySelector('.next-button');
			nextButton.disabled = false;
		}
	}

	clearHandle = () => {
		const { pokemons } = this.props;

		this.setState(() => ({
			list: pokemons,
			listIndex: 0,
		}));

		const nextButton = document.querySelector('.next-button');
		nextButton.disabled = false;
	}

	render() {
		const { list, listIndex } = this.state;
		const { pokemons } = this.props;

		const typesList = pokemons.map((pokemon) => pokemon.type);
    const types = typesList.filter((elem, index, self) =>index === self.indexOf(elem)).sort();

		return (
			<div className="pokedex">
				<Pokemon key={list[listIndex].id} pokemon={list[listIndex]} />

				<div className="type-list">
					<FilterButton type="All" handle={this.clearHandle} />

					{types.map((type) => (
						<FilterButton key={type} type={type} handle={this.filterHandle} />
					))}
				</div>

				<NextButton handle={this.nextHandle} />
			</div>
		);
	}
}

export default Pokedex;
