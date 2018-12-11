const { sum, sumIf, sumOfSquaresOfEvens } = require('../src/jsArrayFunctions');

describe('jsArrayFunctions', () => {
    describe('sum', () => {
        it('should return 15 for [1, 2, 3, 4, 5]', () => {
            expect(sum([1, 2, 3, 4, 5])).toBe(15);
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

    describe('sumOfSquaresOfEvens', () => {
        it('should return 0 for [1]', () => {
            const array = [1];
            const result = sumOfSquaresOfEvens(array);

            expect(result).toBe(0);
        });

        it('should return 20 for [1, 2, 3, 4]', () => {
            const array = [1, 2, 3, 4];
            const result = sumOfSquaresOfEvens(array);

            expect(result).toBe(20);
        });
    });
});
