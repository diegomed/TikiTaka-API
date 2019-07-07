import db from '../../db/db'
import location from './locationsSchema';

class locations {

    constructor() {}

    public getLocations(): any {
        return location.find();
    }
}

const locationsModel = new locations();
export default locationsModel;