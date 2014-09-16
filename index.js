var connect = require('connect');
var http = require('http');

var app = connect()
    .use(connect.favicon())
    .use(connect.logger('dev'))
    .use(function(req, res, next) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, cruel world!");
    });

http.createServer(app).listen(3000);

module.exports = app;