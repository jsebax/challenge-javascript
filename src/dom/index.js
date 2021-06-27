import { leadingZeros } from '../utils/index.js';

const createCardTypes = (types) => {
	const cardTypes = document.createElement('div');

	types.forEach(type => {
		const cardType = document.createElement('span');

		cardType.classList.add('pill');
		cardType.classList.add(`background-color-${type}`);
		cardType.innerText = type;

		cardTypes.appendChild(cardType);
	});

	return cardTypes;
};

const createPokemonCard = (pokemon) => {
	const card = document.createElement('div');
	const imageContainer = document.createElement('div');
	const image = document.createElement('img');
	const textContainer = document.createElement('div');
	const cardId = document.createElement('div');
	const cardName = document.createElement('div');
	const cardTypes = createCardTypes(pokemon.types);

	// Set card image
	image.src = pokemon.image;
	image.alt = pokemon.name;
	imageContainer.classList.add('card__image');
	imageContainer.appendChild(image);

	// Set card text info
	cardId.classList.add('card__eyebrow');
	cardId.innerText = `#${leadingZeros(pokemon.id)}`;

	cardName.classList.add('card__name');
	cardName.innerText = pokemon.name.split('-').join(' ');

	textContainer.classList.add('card__info');
	textContainer.appendChild(cardId);
	textContainer.appendChild(cardName);
	textContainer.appendChild(cardTypes);

	// Add elements to card
	card.classList.add('card');

	card.appendChild(imageContainer);
	card.appendChild(textContainer);

	return card;
};

const createPokemonList = (pokemonList, domEl) => {
	const list = document.createElement('ul');

	pokemonList.forEach(pokemon => {
		const listElement = document.createElement('li');
		const pokemonCard = createPokemonCard(pokemon);
		
		// Add data types to list element
		listElement.setAttribute('data-types', pokemon.types.join(','));
		listElement.classList.add('card-list__item');
		listElement.appendChild(pokemonCard);
		list.appendChild(listElement);
	});

	list.classList.add('card-list');

	domEl.appendChild(list);
};

const createDropdownTypes = (pokemonList, domEl) => {
	const pokemonTypes = [...new Set(pokemonList.reduce((types, pokemon) => [...types, ...pokemon.types], []))];
	const sortedTypes = pokemonTypes.sort();

	sortedTypes.forEach(type => {
		const optionEl = document.createElement('option');

		optionEl.setAttribute('value', type);
		optionEl.innerText = type;

		domEl.appendChild(optionEl);
	});
};

export {
	createDropdownTypes,
	createPokemonList
};