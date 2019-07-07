"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locations_1 = __importDefault(require("../model/locations/locations"));
var locationsController = /** @class */ (function () {
    function locationsController() {
    }
    locationsController.prototype.getLocations = function (req, res) {
        locations_1.default.getLocations()
            .then(function (data) {
            res.send(data);
        })
            .catch(function (err) {
            res.send(err);
        });
    };
    return locationsController;
}());
var Controller = new locationsController();
exports.default = Controller;
//# sourceMappingURL=locationsController.js.map