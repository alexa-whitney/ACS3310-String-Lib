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

console.log(makeHashTag("Amazing bongo drums for sale")); 