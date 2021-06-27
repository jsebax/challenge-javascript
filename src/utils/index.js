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
	leadingZeros
};