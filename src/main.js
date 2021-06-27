import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = (domElements) => {
	const {
		mainContent,
		headerCheckbox,
		dropdownTypes,
		cardListItems
	} = domElements;

	headerCheckbox.addEventListener('change', () => {
		mainContent.classList.toggle('dark', headerCheckbox.checked);
	});

	dropdownTypes.addEventListener('change', () => {
		const selectedValue = dropdownTypes.value;

		cardListItems.forEach(item => {
			if (selectedValue === 'all') {
				item.classList.remove('hide');
			} else {
				const itemTypes = item.getAttribute('data-types');
				const hasType = itemTypes.includes(selectedValue);
	
				item.classList.toggle('hide', !hasType);
			}
		});
	});	
};

const main = async () => {
	const pokemonList = await getPokemonList();
	const domElements = {
		root: document.getElementById("app"),
		dropdownTypes: document.getElementById("dropdown-types"),
		headerCheckbox: document.getElementById('header-checkbox'),
		mainContent: document.querySelector('.main-content')
	};

	// Populate DOM
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, domElements.dropdownTypes);

	// Get Card List
	domElements.cardListItems = document.querySelectorAll('.card-list__item');

	// Add Listeners
	addListeners(domElements);
};

main();