import express from 'express';
import { protectRoute } from '../middleware/protetctRoute.middleware.js';
import { getUserFromSidebar, getMessages, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.get('/users', protectRoute, getUserFromSidebar);
router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
