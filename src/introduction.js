function add(a, b) {
    return a + b;
}

function sumTo(n) {
    return n === 0 ? 0 : add(sumTo(n - 1), n);
}

module.exports = { add, sumTo };