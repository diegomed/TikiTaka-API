"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var chatController_1 = __importDefault(require("../controllers/chatController"));
var router = express_1.default.Router();
router.get('/HelloWorld', chatController_1.default.getHelloWorld);
router.get('/Click', chatController_1.default.getClick);
router.get('/', chatController_1.default.getDefault);
exports.default = router;
//# sourceMappingURL=index.js.map