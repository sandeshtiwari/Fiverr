import express from 'express';
import {} from '../controllers/user.controller.js';
import { verifyToken } from "../middleware/jwt.js";
import { createOrder, getOrders } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
