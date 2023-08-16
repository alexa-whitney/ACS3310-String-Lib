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

