// controllers/StudentsController.js

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    try {
      readDatabase(process.argv[2])
        .then((fields) => {
          let response = 'This is the list of our students\n';
          const responseFields = [];
          for (const i of Object.keys(fields)) {
            responseFields.push(`Number of students in ${i}: ${fields[i].length}. List: ${fields[i].join(', ')}`);
          }
          response += responseFields.join('\n');
          res.status(200).send(response);
        });
    } catch (_error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(req, res) {
    try {
      readDatabase(process.argv[2])
        .then((fields) => {
          const { major } = req.params;
          if (fields[major]) {
            res.status(200).send(`List: ${fields[major].join(', ')}`);
          } else {
            res.status(500).send('Major parameter must be CS or SWE');
          }
        });
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
