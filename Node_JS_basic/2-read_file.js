const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const fields = {};
        const students = data.split('\n').filter((student) => student.trim() !== '');
        if (students.length === 0) {
            throw new Error('Cannot load the database');
        }

        students.shift();

        const count = students.length;
        console.log(`Number of students: ${count}`);

        for (const student of students) {
            const cols = student.split(',');
            const field = cols[3];
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(cols[0]);
        }

        for (const i of Object.keys(fields)) {
            console.log(`Number of students in ${i}: ${fields[i].length}. List: ${fields[i].join(', ')}`);
        }
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
