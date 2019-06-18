"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
// Create a new express application instance
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/Click', function (req, res) {
    res.send('Click!');
});
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
//# sourceMappingURL=app.js.map