/* eslint-disable no-tabs */
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
    } if (exceptions.includes(word)) {
      return word;
    }
    return capitalize(word);
  }).join(' ');
}

function removeExtraSpaces(str) {
  const trimmedStr = str.trim();
  const wordsArray = trimmedStr.split(/ +/);
  return wordsArray.join(' ');
}

function advancedRemoveExtraSpaces(str) {
  const trimmedStr = str.trim();
  const wordsArray = trimmedStr.split(/\s+/);
  return wordsArray.join(' ');
}

function kebobCase(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase();

  let filteredStr = str.split('').filter((char) => {
    const code = char.charCodeAt(0);
    return (
      code === 32 // Space
			// eslint-disable-next-line no-tabs
			|| (code >= 48 && code <= 57) // Numbers 0-9
			|| (code >= 97 && code <= 122) // a-z
			|| code === 45 // Hyphen
    );
  }).join('');

  filteredStr = removeExtraSpaces(filteredStr);

  return filteredStr.split(' ').join('-');
}

function snakeCase(str, separator = '_') {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase();

  let filteredStr = str.split('').filter((char) => {
    const code = char.charCodeAt(0);
    return (
      code === 32 // Space
			|| (code >= 48 && code <= 57) // Numbers 0-9
			|| (code >= 97 && code <= 122) // a-z
			|| code === separator.charCodeAt(0) // Separator character (default is _)
    );
  }).join('');

  filteredStr = removeExtraSpaces(filteredStr);

  return filteredStr.split(' ').join(separator);
}

function camelCase(str) {
  return str.split(' ').map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return capitalize(word);
  }).join('');
}

function shift(str, n) {
  // get all characters except the first 'n'
  // append those 'n' characters to the end
  return str.slice(n) + str.slice(0, n);
}

function makeHashTag(str) {
  const words = str.split(' ');
  if (words.length > 3) {
    words.sort((a, b) => b.length - a.length);
  }

  return words.slice(0, 3).map((word) => `#${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
}

function isEmpty(str) {
  console.log('Testing string:', str); // Log the original string

  const trimmedStr = str.trim();
  console.log('Trimmed string:', trimmedStr); // Log the trimmed string

  if (trimmedStr === '') {
    console.log('String is empty after trimming');
    return true;
  }

  // Loop over each character in the trimmed string
  // eslint-disable-next-line no-restricted-syntax
  for (const char of trimmedStr) {
    // If we encounter any character other than \n, \r, or \t,
    // it means the string isn't empty or just whitespace
    if (char !== '\n' && char !== '\r' && char !== '\t') {
      return false;
    }
  }
  // If we have looped through the entire string and only found whitespace characters, return true
  return true;
}

module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.capitalizeHeadline = capitalizeHeadline;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.advancedRemoveExtraSpaces = advancedRemoveExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
