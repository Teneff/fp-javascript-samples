function sumIf(array, filter) {
    const [first, ...rest] = array;
    const addValue = filter(first) ? first : 0;
    return array.length === 0 ? 0 : addValue + sumIf(rest, filter);
}

module.exports = { sumIf };