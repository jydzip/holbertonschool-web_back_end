const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }
    else if (req.url === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');

        countStudents(process.argv[2])
            .then((data) => {
                res.end(data);
            })
            .catch((error) => {
                res.end(error.message);
            });
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found.');
    }
});

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});

module.exports = app;
