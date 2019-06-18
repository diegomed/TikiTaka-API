"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chat_1 = __importDefault(require("../model/chat/chat"));
var chatController = /** @class */ (function () {
    function chatController() {
    }
    chatController.prototype.getHelloWorld = function (req, res) {
        return res.send(chat_1.default.helloWorld());
    };
    chatController.prototype.getClick = function (req, res) {
        return res.send(chat_1.default.click());
    };
    chatController.prototype.getDefault = function (req, res) {
        return res.send(chat_1.default.homepage());
    };
    return chatController;
}());
var Controller = new chatController();
exports.default = Controller;
//# sourceMappingURL=chatController.js.map