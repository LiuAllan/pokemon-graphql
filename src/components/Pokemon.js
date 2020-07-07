import React from 'react';

export const Pokemon = ({ pokemon }) => {
	console.log(pokemon);
	return(
			<div className="pokemon">
				<div className="pokemon__name">
					<p>{pokemon.name}</p>
				</div>

				<div className="pokemon__meta">
					<span className="hp">{pokemon.maxHP}</span>
					<span className="cp">{pokemon.maxCP}</span>
				</div>

				<div className="pokemon__image">
					<img src={pokemon.image} alt={pokemon.name} />
				</div>

				<div className="pokemon__attacks">
					{pokemon.attacks.special.slice(0, 3).map((spec, index) => <span key={index}>{spec.name}</span>)}
				</div>
			</div>
	)
}