import express from 'express';
import {getPosts, createPosts} from '../controller/postsController.js'
const router = express.Router();

//http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPosts);

export default router