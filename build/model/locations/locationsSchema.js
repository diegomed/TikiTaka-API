"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bson_1 = require("bson");
exports.locationSchema = new mongoose_1.default.Schema({
    latitude: { type: bson_1.Decimal128, required: true },
    longitude: { type: bson_1.Decimal128, required: true },
    name: { type: String, required: true }
}, {
    collection: 'Locations'
});
var location = mongoose_1.default.model('Location', exports.locationSchema);
exports.default = location;
//# sourceMappingURL=locationsSchema.js.map