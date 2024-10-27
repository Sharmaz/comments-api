import express from 'express';

import CommentService from '../services/comment.service';

const commentService = new CommentService();
const router = express.Router();

router.get('/', async (req, res) => {
  const comments = await commentService.find();
  res.status(200).json(comments);
});

router.post('/', async (req, res) => {
  const comment = await commentService.create(req.body);
  res.status(201).json(comment);
});

router.get('/:id', async (req, res) => {
  const comment = await commentService.findOne(req.params.id);
  res.status(200).json(comment);
});

router.patch('/:id', async (req, res) => {
  const comment = await commentService.update(req.params.id, req.body);
  res.status(200).json(comment);
});

router.delete('/:id', async (req, res) => {
  const comment = await commentService.delete(req.params.id);
  res.status(204).json(comment);
});

export default router;
