const _ = require('lodash');

function average(array, iteratee) {
    return _.sumBy(array, iteratee) / array.length;
}

function studentsFromCitySortedByAvgGrade(students, city) {
    return _(students)
        .filter(s => s.city === city)
        .sortBy(s => average(s.grades, g => g.grade))
        .reverse()
        .value();
}

module.exports = { studentsFromCitySortedByAvgGrade };