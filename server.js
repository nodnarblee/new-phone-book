var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(__dirname + '/node_modules/angular'));
app.use(serveStatic(__dirname + '/node_modules/angular-route'));
app.use(serveStatic(__dirname + '/node_modules/angular-resource'));
app.use(serveStatic(__dirname + '/public'));
app.listen(8080);
