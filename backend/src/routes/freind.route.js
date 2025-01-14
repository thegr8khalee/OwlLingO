import express from 'express';
import { protectRoute } from '../middleware/protetctRoute.middleware.js';
import {
  searchUsers,
  sendRequest,
  acceptRequest,
  delRequest,
  loadFriends,
  loadFriendReq,
  suggestUsers,
  cancelRequest,
} from '../controllers/freinds.controller.js';

const router = express.Router();

router.post('/search', protectRoute, searchUsers);
router.get('/suggest', protectRoute, suggestUsers);
router.put('/sendRequest', protectRoute, sendRequest);
router.put('/acceptRequest', protectRoute, acceptRequest);
router.put('/delRequest', protectRoute, delRequest);
router.put('/cancelRequest', protectRoute, cancelRequest);
router.get('/loadFriends', protectRoute, loadFriends);
router.get('/loadFriendReq', protectRoute, loadFriendReq);
//router.get('/getMe', protectRoute, getMe);

export default router;
