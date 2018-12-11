const { add } = require('./introduction');

function sum(array) {
    return array.reduce(add, 0);
}

function sumIf(array, predicate) {
    return array.filter(predicate)
        .reduce(add, 0);
}

function sumOfSquaresOfEvens(array) {
    return array
        .filter(x => x % 2 === 0)
        .map(x => x * x)
        .reduce(add, 0);
}

module.exports = { sum, sumIf, sumOfSquaresOfEvens };