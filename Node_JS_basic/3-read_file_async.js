const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const fields = {};
        const students = [];
        for (const i of data.split('\r\n')) {
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
        console.log(error)
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
