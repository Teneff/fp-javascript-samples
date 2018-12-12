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

function range(start, end, step = 1) {
    return start <= end ? [start, ...range(start + step, end, step)] : [];
}

module.exports = { add, sumTo, sum, range };