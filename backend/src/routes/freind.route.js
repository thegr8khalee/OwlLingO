import express from 'express';
import { protectRoute } from '../middleware/protetctRoute.middleware.js';
import {
  searchUsers,
  sendRequest,
  acceptRequest,
  delRequest,
} from '../controllers/freinds.controller.js';

const router = express.Router();

router.get('/search', protectRoute, searchUsers);
router.put('/sendRequest/', protectRoute, sendRequest);
router.put('/acceptRequest/', protectRoute, acceptRequest);
router.put('/delRequest/', protectRoute, delRequest);

export default router;
