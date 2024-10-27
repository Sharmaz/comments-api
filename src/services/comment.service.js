const { v4 } = require('uuid');
const { models } = require('../libs/sequelize');

class CommentService {
  async create(data) {
    const newComment = await models.Comment.create({
      id: v4(),
      ...data,
      createdAt: new Date(),
    });

    return newComment
  }

  async find() {
    const comments = await models.Comment.findAll();

    return comments;
  }

  async findOne(id) {
    const comment = await models.Comment.findByPk(id);

    return comment;
  }

  async update(id, data) {
    const comment = await this.findOne(id);
    comment.update(data);

    return comment;
  }

  async delete(id) {
    const comment = await this.findOne(id);
    await comment.destroy();

    return comment;
  }
}

module.exports = CommentService;
