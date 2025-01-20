const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8').split('\n');
        const fields = {};
        const students = [];
        for (const i of data) {
            if (i) {
                students.push(i.split(','));
            }
        }

        const count = students.length - 1;
        console.log(`Number of students: ${count}`);

        for (const i of students) {
            if (!fields[i[3]]) {
                fields[i[3]] = [];
            }
            fields[i[3]].push(i[0]);
        }

        delete fields.field;

        for (const i of Object.keys(fields)) {
            console.log(`Number of students in ${i}: ${fields[i].length}. List: ${fields[i].join(', ')}`);
        }
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
