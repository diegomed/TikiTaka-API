"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locationsSchema_1 = __importDefault(require("./locationsSchema"));
var locations = /** @class */ (function () {
    function locations() {
    }
    locations.prototype.getLocations = function (callback) {
        return locationsSchema_1.default.find(callback);
    };
    return locations;
}());
var locationsModel = new locations();
exports.default = locationsModel;
//# sourceMappingURL=locations.js.map