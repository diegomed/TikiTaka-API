"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var routes_1 = __importDefault(require("./routes"));
var db_1 = __importDefault(require("./db/db"));
var express = require("express");
// Create a new express application instance
var app = express();
app.use(routes_1.default);
var port = process.env.PORT || 3000;
if (db_1.default.connect()) {
    app.listen(port, function () {
        console.log('Example app listening on port ' + port + '!');
    });
}
else {
    console.log('Unable to connect to mongo');
}
//# sourceMappingURL=app.js.map