function add(a, b) {
    return a + b;
}

function sumTo(n) {
    return n === 0 ? 0 : add(sumTo(n - 1), n);
}

function sum(array) {
    const [first, ...rest] = array;
    return array.length === 0 ? 0 : add(first, sum(rest));
}

module.exports = { add, sumTo, sum };