const { add, sumTo } = require('../src/introduction');

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
});
