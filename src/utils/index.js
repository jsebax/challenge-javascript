const capitalizeWord = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const capitalizeText = (text) => text.split('-').map(capitalizeWord).join(" ");

const leadingZeros = (number) => {
	let zeros = '';

	if (number >= 10 && number < 100) {
		zeros = '0';
	} else if (number < 10) {
		zeros = '00';
	}

	return `${zeros}${number}`;
};

export {
	capitalizeText,
	capitalizeWord,
	leadingZeros
};