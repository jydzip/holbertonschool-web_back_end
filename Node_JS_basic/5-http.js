// 5-http.js
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n').filter((student) => student.trim() !== '');
      if (students.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      students.shift();

      let response = `Number of students: ${students.length}\n`;

      const fields = {};
      students.forEach((student) => {
        const studentInfo = student.split(',');
        if (!fields[studentInfo[3]]) {
          fields[studentInfo[3]] = [];
        }
        fields[studentInfo[3]].push(studentInfo[0]);
      });

      for (const i of Object.keys(fields)) {
        response += `Number of students in ${i}: ${fields[i].length}. List: ${fields[i].join(', ')}\n`;
      }
      resolve(response.trim());
    });
  });
}

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    try {
      countStudents(process.argv[2])
        .then((response) => {
          res.end(`This is the list of our students\n${response}\n`);
        })
        .catch((error) => {
          res.statusCode = 500;
          res.end(error.message);
        });
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found.');
  }
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

module.exports = app;
