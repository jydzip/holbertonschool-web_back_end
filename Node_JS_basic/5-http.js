// 5-http.js
const http = require('http');
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(',')).filter((student) => student.length === 4);

    let response = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((student) => {
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    });

    for (const i of Object.keys(fields)) {
      response += `Number of students in ${i}: ${fields[i].length}. List: ${fields[i].join(', ')}\n`;
    }

    return response.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    try {
      const response = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${response}`);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

module.exports = app;
