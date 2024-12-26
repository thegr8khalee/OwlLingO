import express from 'express';
import { protectRoute } from '../middleware/protetctRoute.middleware.js';
import { getMessages, sendMessage, markLastMessageAsRead, getUserFromSidebar } from '../controllers/message.controller.js';

const router = express.Router();

router.get('/users', protectRoute, getUserFromSidebar);
router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);
router.put('/mark-read/:userId', markLastMessageAsRead);

export default router;
