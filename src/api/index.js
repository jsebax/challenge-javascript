// Fetch API Data
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (apiURL, limit) => {
	const params = limit ? `?limit=${limit}` : '';
	const url = `${apiURL}${params}`;
	const data = await fetch(url);

	return data.json();
};

const sortData = (pokemonObject) => {
	const types = pokemonObject.types.map(t => t.type.name);

	return {
		id: pokemonObject.id,
		name: pokemonObject.name,
		image: pokemonObject.sprites.other['official-artwork'].front_default,
		types
	};
};

const getPokemonList = async () => {
	const pokemonDirectory = await getData(BASE_URL, 151);

	const pokemonData = await Promise.all(pokemonDirectory.results.map(async (pokemon) => {
		const pokemonResult = await getData(pokemon.url);

		return sortData(pokemonResult);
	}));

	return pokemonData;
};

export {
	getPokemonList
};