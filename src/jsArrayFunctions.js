const { add } = require('./introduction');

function sum(array) {
    return array.reduce(add, 0);
}

function sumIf(array, filter) {
    return array.filter(filter)
        .reduce(add, 0);
}

module.exports = { sum, sumIf };