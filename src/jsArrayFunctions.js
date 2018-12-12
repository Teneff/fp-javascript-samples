const { add } = require('./introduction');

function sum(array) {
    return array.reduce(add, 0);
}

function sumIf(array, predicate) {
    return array.filter(predicate)
        .reduce(add, 0);
}

function sumOfSquares(array) {
    return array
        .filter(x => x % 2 === 0)
        .map(x => x * x)
        .reduce(add, 0);
}

function map(array, fn) {
    return array.reduce((r, x) => [...r, fn(x)], []);
}

module.exports = { sum, sumIf, sumOfSquares, map };