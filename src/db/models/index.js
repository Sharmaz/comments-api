const { Comment, CommentSchema } = require('./comment.model');

function setupModels(sequelize) {
  Comment.init(CommentSchema, Comment.config(sequelize));
}

module.exports = setupModels;
