const { add, sumTo, sum } = require('../src/introduction');

describe('introduction', () => {
    describe('add', () => {
        it('should return 3 for 1 and 2', () => {
            expect(add(1, 2)).toBe(3);
        });
    });

    describe('sumTo', () => {
        it('should return 3 for n = 2', () => {
            expect(sumTo(2)).toBe(3);
        });

        it('should return 21 for n = 6', () => {
            expect(sumTo(6)).toBe(21);
        });
    });

    describe('sum', () => {
        it('should return 10 for [1, 3, 6]', () => {
            expect(sum([1, 3, 6])).toBe(10);
        });

        it('should return 0 for []', () => {
            expect(sum([])).toBe(0);
        });
    });
});
