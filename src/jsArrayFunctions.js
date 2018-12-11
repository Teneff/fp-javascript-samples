const { add } = require('./introduction');

function sum(array) {
    return array.reduce(add, 0);
}

function sumIf(array, predicate) {
    return array.filter(predicate)
        .reduce(add, 0);
}

module.exports = { sum, sumIf };