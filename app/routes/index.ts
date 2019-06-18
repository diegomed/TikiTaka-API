import express from 'express';
import chatController from '../controllers/chatController';

const router = express.Router();

router.get('/HelloWorld', chatController.getHelloWorld);
router.get('/Click', chatController.getClick);
router.get('/', chatController.getDefault);

export default router;