import express from 'express';
import {} from '../controllers/user.controller.js';
import { verifyToken } from "../middleware/jwt.js";
import {
  createMessage,
  getMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
