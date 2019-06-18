"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chat = /** @class */ (function () {
    function chat() {
    }
    chat.prototype.helloWorld = function () {
        return 'Hello World!';
    };
    chat.prototype.click = function () {
        return 'Click!';
    };
    chat.prototype.homepage = function () {
        return 'Home Page!';
    };
    return chat;
}());
var chatModel = new chat();
exports.default = chatModel;
//# sourceMappingURL=chat.js.map