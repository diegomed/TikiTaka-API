import locations from '../model/locations/locations'
import { response } from 'express';

class locationsController {

    public getLocations(req: any, res: any): void {
        locations.getLocations()
            .then(function(data: any) {
                res.send(data);
            })
            .catch(function(err: any) {
                res.send(err);
            });
    }

}

const Controller = new locationsController();
export default Controller;