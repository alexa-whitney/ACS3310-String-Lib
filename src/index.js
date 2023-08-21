function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function allCaps(str) {
	return str.toUpperCase();
}

function capitalizeWords(str) {
	return str.split(' ').map(capitalize).join(' ');
}

function capitalizeHeadline(str) {
	const exceptions = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];
	return str.split(' ').map((word, index) => {
		if (index === 0) {
			return capitalize(word);
		} else if (exceptions.includes(word)) {
			return word;
		} else {
			return capitalize(word);
		}
	}).join(' ');
}

function removeExtraSpaces(str) {
	let trimmedStr = str.trim();
	let wordsArray = trimmedStr.split(/ +/);
	return wordsArray.join(' ');
}

function advancedRemoveExtraSpaces(str) {
	let trimmedStr = str.trim();
	let wordsArray = trimmedStr.split(/\s+/);
	return wordsArray.join(' ');
}

function kebobCase(str) {
	str = str.toLowerCase();

	let filteredStr = str.split('').filter(char => {
		let code = char.charCodeAt(0);
		return (
			code === 32 ||  // Space
			(code >= 48 && code <= 57) ||  // Numbers 0-9
			(code >= 97 && code <= 122) || // a-z
			code === 45  // Hyphen
		);
	}).join('');

	filteredStr = removeExtraSpaces(filteredStr);

	return filteredStr.split(' ').join('-');
}

function snakeCase(str, separator = "_") {
	str = str.toLowerCase();

	let filteredStr = str.split('').filter(char => {
		let code = char.charCodeAt(0);
		return (
			code === 32 ||  // Space
			(code >= 48 && code <= 57) ||  // Numbers 0-9
			(code >= 97 && code <= 122) || // a-z
			code === separator.charCodeAt(0)  // Separator character (default is _)
		);
	}).join('');

	filteredStr = removeExtraSpaces(filteredStr);

	return filteredStr.split(' ').join(separator);
}

function camelCase(str) {
	return str.split(' ').map((word, index) => {
		if (index === 0) {
			return word.toLowerCase();
		} else {
			return capitalize(word);
		}
	}).join('');
}

function shift(str, n) {
	// get all characters except the first 'n'
	// append those 'n' characters to the end
	return str.slice(n) + str.slice(0, n);
}

function makeHashTag(str) {
	let words = str.split(' ');
	if (words.length > 3) {
		words.sort((a, b) => b.length - a.length);
	}

	return words.slice(0, 3).map(word => '#' + word[0].toUpperCase() + word.slice(1).toLowerCase());
}

function isEmpty(str) {
	console.log("Testing string:", str);  // Log the original string
	
	let trimmedStr = str.trim();
	console.log("Trimmed string:", trimmedStr);  // Log the trimmed string

	if (trimmedStr === "") {
			console.log("String is empty after trimming");
			return true;
	}

	// Loop over each character in the trimmed string
	for (let char of trimmedStr) {
			console.log("Checking character:", char);  // Log the current character being checked

			// If we encounter any character other than \n, \r, or \t, 
			// it means the string isn't empty or just whitespace
			if (char !== '\n' && char !== '\r' && char !== '\t') {
					console.log("Found non-whitespace character");
					return false;
			}
	}

	console.log("Reached end of string without finding non-whitespace characters");
	// If we have looped through the entire string and only found whitespace characters, return true
	return true;
}

// For testing purposes:
console.log(isEmpty(' \n\t\r '));  // Should log details and return true
console.log(isEmpty(' a \n\t\r '));  // Should log details and return false

module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.capitalizeHeadline = capitalizeHeadline
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.advancedRemoveExtraSpaces = advancedRemoveExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty
