import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUserFromSidebar } from '../constrollers/message.controller.js';
import { getMessages } from '../constrollers/message.controller.js';
import { sendMessage } from '../constrollers/message.controller.js';

const router = express.Router();

router.get('/users', protectRoute, getUserFromSidebar);
router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
