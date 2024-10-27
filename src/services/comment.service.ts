import { v4 } from 'uuid';
// const { models } = require('../libs/sequelize');
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

    return comments;
  }

  async findOne(id: string) {
    const comment = await sequelize.models.Comment.findByPk(id);

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
