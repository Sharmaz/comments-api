import { Comment, CommentSchema } from './comment.model';

function setupModels(sequelize: any) { // eslint-disable-line
  Comment.init(CommentSchema, Comment.config(sequelize));
}

export default setupModels;
