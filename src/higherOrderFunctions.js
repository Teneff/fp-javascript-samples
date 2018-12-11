function sum(array) {
    const [first, ...rest] = array;
    return array.length === 0 ? 0 : (first + sum(rest));
}

function sumIf(array, predicate) {
    const [first, ...rest] = array;
    const addValue = predicate(first) ? first : 0;
    return array.length === 0 ? 0 : addValue + sumIf(rest, predicate);
}

function map(array, func) {
    const [first, ...rest] = array;

    return array.length === 0 ? []: [func(first), ...map(rest, func)];
}

module.exports = { sum, sumIf, map };