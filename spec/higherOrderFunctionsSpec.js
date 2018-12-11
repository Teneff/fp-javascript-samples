const { sum, sumIf } = require('../src/higherOrderFunctions');

describe('higherOrderFunctions', () => {
    describe('sum', () => {
        it('should return 15 for [1, 2, 3, 4, 5]', () => {
            const result = sum([1, 2, 3, 4, 5]);

            expect(result).toBe(15);
        });

        it('should return 0 for []', () => {
            expect(sum([])).toBe(0);
        });
    });

    describe('sumIf', () => {
        it('should return 20 for [1, 2, 3, 4, 5, 6, 7, 8, 9] and predicate is isEven', () => {
            const isEven = n => n % 2 === 0;
            const result = sumIf([1, 2, 3, 4, 5, 6, 7, 8, 9], isEven);

            expect(result).toBe(20);
        });
    });
});
