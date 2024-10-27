// const { Comment, CommentSchema } = require('./comment.model');
import { Comment, CommentSchema } from './comment.model';

function setupModels(sequelize: any) { // eslint-disable-line
  Comment.init(CommentSchema, Comment.config(sequelize));
}

// module.exports = setupModels;

export default setupModels;
