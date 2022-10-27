// All routes related to posts
import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'; 
const router = express.Router();

router.get('/', getPosts)
router.get('/', createPost)

export default router;