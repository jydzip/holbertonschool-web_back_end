const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fields = {};
      const students = data.split('\n').filter((student) => student.trim() !== '');
      if (students.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      students.shift();

      for (const student of students) {
        const cols = student.split(',');
        const field = cols[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(cols[0]);
      }

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
