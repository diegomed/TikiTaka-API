"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var routes_1 = __importDefault(require("./routes"));
var mongoose_1 = __importDefault(require("mongoose"));
var express = require("express");
// Create a new express application instance
var app = express();
app.use(routes_1.default);
var uri = 'mongodb://localhost:27017/local';
var port = process.env.PORT || 3000;
mongoose_1.default.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, function () {
            console.log('Example app listening on port ' + port + '!');
        });
    }
});
//# sourceMappingURL=app.js.map