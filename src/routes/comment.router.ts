import express from 'express';
import CommentService from '../services/comment.service';

const commentService = new CommentService();
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const comments = await commentService.find();
    res.status(200).json(comments);
  } catch (err) {
    next(err)
  }
});

router.post('/',
  async (req, res, next) => {
    try {
      const comment = await commentService.create(req.body);
      res.status(201).json(comment);
    } catch (err) {
      next(err)
    }
  }
);

router.get('/:id', async (req, res, next) => {
  try {
    const comment = await commentService.findOne(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    next(err)
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const comment = await commentService.update(req.params.id, req.body);
    res.status(200).json(comment);
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await commentService.delete(req.params.id);
    res.status(204).json();
  } catch (err) {
    next(err)
  }
});

export default router;
