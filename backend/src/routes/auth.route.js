import express from 'express';
import {
  checkAuth,
  login,
  logout,
  signup,
} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protetctRoute.middleware.js';
import { updateProfile } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.put('/update-profile', protectRoute, updateProfile);

router.get('/check', protectRoute, checkAuth);

export default router;