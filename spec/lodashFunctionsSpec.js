const { studentsFromCitySortedByAvgGrade } = require('../src/lodashFunctions');

const students = [{
    name: 'Petar Petrov',
    city: 'Sofia',
    grades: [{
        name: 'Functional Programming',
        grade: 3
    }, {
        name: 'Object Oriented Programming',
        grade: 5
    }, {
        name: 'Logic Programming',
        grade: 6
    }]
}, {
    name: 'Spas Spasov',
    city: 'Sofia',
    grades: [{
        name: 'Functional Programming',
        grade: 6
    }, {
        name: 'Object Oriented Programming',
        grade: 6
    }, {
        name: 'Logic Programming',
        grade: 3
    }]
}, {
    name: 'Ivan Ivanov',
    city: 'Pleven',
    grades: [{
        name: 'Functional Programming',
        grade: 6
    }, {
        name: 'Object Oriented Programming',
        grade: 6
    }, {
        name: 'Logic Programming',
        grade: 6
    }]
}];

describe('lodashFunctions', () => {
    describe('studentsFromCitySortedByAvgGrade', () => {
        it('should return sorted students from Sofia', () => {
            const result = studentsFromCitySortedByAvgGrade(students, 'Sofia');

            expect(result).toEqual([students[1], students[0]]);
        });

        it('should return sorted students from Pleven', () => {
            const result = studentsFromCitySortedByAvgGrade(students, 'Pleven');

            expect(result).toEqual([students[2]]);
        });
    });
});