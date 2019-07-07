import db from '../../db/db'
import location from './locationsSchema';

class locations {

    private localDB: any;

    constructor() {}

    public getLocations(callback: any): any {
        return location.find(callback);
    }
}

const locationsModel = new locations();
export default locationsModel;