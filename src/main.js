import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const main = async () => {
	const app = document.getElementById("app");
	const dropdownTypes = document.getElementById("dropdown-types");
	const pokemonList = await getPokemonList();
	
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, dropdownTypes);
};

main();