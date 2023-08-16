function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function allCaps(str) {
    return str.toUpperCase();
}

console.log(allCaps('hello world'));