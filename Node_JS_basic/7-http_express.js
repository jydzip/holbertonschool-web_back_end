// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(process.argv[2])
    .then((result) => {
      res.end(result);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

module.exports = app;
