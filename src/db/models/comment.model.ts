// const { Model, DataTypes } = require('sequelize');
import { Model, DataTypes } from 'sequelize';

const COMMENT_TABLE = 'comments';

const CommentSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

class Comment extends Model {
  static config(sequelize: any) { // eslint-disable-line
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'Comment',
      timestamps: false,
    }
  }
}

// module.exports = { Comment, CommentSchema, COMMENT_TABLE };
export { Comment, CommentSchema, COMMENT_TABLE };
