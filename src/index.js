function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function allCaps(str) {
    return str.toUpperCase();
}

function capitalizeWords(str) {
    return str.split(' ').map(capitalize).join(' ');
}

console.log(capitalizeWords('hello world, my name is alexa and i am not a robot'))

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

console.log(capitalizeHeadline('the cat and the dog sat by the window in order to watch the rain fall'))