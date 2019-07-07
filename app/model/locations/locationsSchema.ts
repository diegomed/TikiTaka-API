import mongoose from 'mongoose';
import { Decimal128 } from 'bson';

export const locationSchema = new mongoose.Schema({
    latitude: { type: Decimal128, required: true },
    longitude: { type: Decimal128, required: true },
    name: { type: String, required: true }
},{
    collection: 'Locations'
});

const location = mongoose.model('Location', locationSchema);
export default location;