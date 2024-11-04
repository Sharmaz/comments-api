import { v4 } from 'uuid';
import createHttpError from 'http-errors';
import sequelize from '../libs/sequelize';

import { CreateCommentDto, UpdateCommentDto } from '../dtos/comment.dto';

class CommentService {
  async create(data: CreateCommentDto) {
    const newComment = await sequelize.models.Comment.create({
      id: v4(),
      ...data,
      createdAt: new Date(),
    });

    return newComment
  }

  async find() {
    const comments = await sequelize.models.Comment.findAll();

    if (!comments || comments.length < 1) {
      throw createHttpError(404, 'Comments not found');
    }

    return comments;
  }

  async findOne(id: string) {
    const comment = await sequelize.models.Comment.findByPk(id);

    if (!comment) {
      throw createHttpError(404, 'Comment not found');
    }

    return comment;
  }

  async update(id: string, data: UpdateCommentDto) {
    const comment = await this.findOne(id);
    comment?.update(data);

    return comment;
  }

  async delete(id: string) {
    const comment = await this.findOne(id);
    await comment?.destroy();

    return comment;
  }
}

export default CommentService;
