const { sumIf } = require('../src/higherOrderFunctions');

describe('higherOrderFunctions.js', () => {
    describe('sumIf', () => {
        it('should return 20 for [1, 2, 3, 4, 5, 6, 7, 8, 9] and filter is isEven', () => {
            const isEven = n => n % 2 === 0;

            expect(sumIf([1, 2, 3, 4, 5, 6, 7, 8, 9], isEven)).toBe(20);
        });
    });
});
