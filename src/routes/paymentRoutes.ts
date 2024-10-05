import express from 'express';
import { protect } from '../middleware/authMiddleware';
import { createPaymentRequest } from '../controllers/paymentController';

const router = express.Router();

// @ts-ignore
router.post('/pay', protect, createPaymentRequest); // User must be authenticated

export default router;
