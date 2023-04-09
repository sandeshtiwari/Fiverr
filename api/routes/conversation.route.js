import express from 'express';
import {} from '../controllers/user.controller.js';
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversations,
  getConversations,
  getSingleConversation,
  updateConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversations);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
