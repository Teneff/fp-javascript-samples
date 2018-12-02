const { add } = require('../src/introduction');

describe('introduction', () => {
    describe('add', () => {
        it('should return 3 for 1 and 2', () => {
            expect(add(1, 2)).toBe(3);
        });
    });
});
