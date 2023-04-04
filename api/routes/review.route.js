import express from 'express';
import {
  createReview,
  deleteReview,
  getReviews,
} from '../controllers/review.controller.js';
import {} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post('/', verifyToken, createReview);
router.get('/:gigId', getReviews);
router.delete('/:gigId', deleteReview);

export default router;
