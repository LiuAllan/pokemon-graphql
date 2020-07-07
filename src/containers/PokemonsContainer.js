import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemon';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	max-width: 550px;
	margin: auto;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 20px;

	.pokemon {
		width: 49%;
		background-color: #fff;
		background-clip: border-box;
		border: 1px solid rgba(0,0,0,0.125);
		border-radius: 0.25rem;
		box-shadow: 0 0.125rem rgba(0,0,0,0.075);
		overflow: hidden;
		margin-bottom: 20px;
	}

	.pokemon__name {
		background-color: #00acee;
		text-align: center;
		padding: 10px;
	}

	.pokemon__name p {
		text-transform: uppercase;
		font-weight: 700;
		color: white;
		letter-spacing: 4px;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
	}

	.pokemon__image {
		padding: 20px;
		min-height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-width: 100%;
			height: auto;
		}
	}

	.pokemon__attacks {
		display: flex;
		padding-left: 5px;
		padding-right: 5px;
		justify-content: space-between;

		span {
			width: 25%;
			background-color: lightblue;
			border-radius: 3px;
			padding: 7px;
			font-weight: 700;
			color: #fff;
			padding-left: 10px;
			padding-right: 10px;
			font-size: 12px;
			margin-bottom: 10px;
			word-wrap: break-word;
			text-align: center;
			line-height: 15px;
		}
	}

	.pokemon__meta {
		display: grid;
		grid-template-columns: auto auto;
		padding: 0 10px;
		margin-top: 10px;

		span {
			color: #fff;
			text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
			font-weight: bold;
			margin: 0;
			padding: 5px 20px;
			border-radius 5px;
		}

		.cp {
			justify-self: right;
			background-color: #82B5F6;
		}
		.hp {
			justify-self: left;
			background-color: #F68282;
		}
	}

	@media (max-width: 800px) {
		.pokemon {
			width: 100%;
		}

	@media (max-width: 400px) {
		.pokemon__attacks, .pokemon__meta {
			flex-wrap: wrap;
		}

		.pokemon__meta span,
		.pokemon__attacks span,
		.pokemon {
			width: 100%;
		}

		.pokemon__meta span {
			margin-bottom: 10px;
		}
	}

	
	}
`;

export const PokemonsContainer = () => {
	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 9 },
	});

	return(
		<StyledContainer>
			{/*If pokemons exists*/}
			{pokemons && pokemons.map(pokemon => 
				<Pokemon 
					key={pokemon.id} 
					pokemon={pokemon}
				/>)
			}
		</StyledContainer>
	)
}