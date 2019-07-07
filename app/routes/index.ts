import express from 'express';
import chatController from '../controllers/chatController';
import locationsController from '../controllers/locationsController';

const router = express.Router();

router.get('/HelloWorld', chatController.getHelloWorld);
router.get('/Click', chatController.getClick);
router.get('/', chatController.getDefault);
router.get('/Locations', locationsController.getLocations);

export default router;