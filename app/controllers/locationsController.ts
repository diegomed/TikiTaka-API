import locations from '../model/locations/locations'

class locationsController {

    getLocations(req: any, res: any): void {
        locations.getLocations(function(err: any, locations: any) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(locations);
            }
        });
    }

}

const Controller = new locationsController();
export default Controller;