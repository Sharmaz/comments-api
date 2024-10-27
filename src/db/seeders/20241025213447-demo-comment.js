const { COMMENT_TABLE } = require('../models/comment.model');

module.exports = {
  async up (queryInterface) {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    await queryInterface.bulkInsert(COMMENT_TABLE, [{
      id: '71310b41-1265-4bb3-85d0-ba9900ee42fb',
      mail: 'irae45@gmail.com',
      message: 'Hello World',
      createdAt: new Date()
    }]);
  },

  async down (queryInterface) {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    await queryInterface.bulkDelete(COMMENT_TABLE, null, {});
  }
};
