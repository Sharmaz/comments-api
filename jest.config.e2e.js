const commonConfig = require('./jest.config');

module.exports = {
  ...commonConfig,
  testMatch: [
    '<rootDir>/tests/e2e/*.e2e.test.{js,ts}'
  ],
  collectCoverageFrom: [
    '**/db/**/*.js',
    '**/libs/**/*.js',
    '**/middlewares/**/*.js',
    '**/routes/**/*.{js,ts}',
    '**/services/**/*.js',
    '**/utils/**/*.js'
  ],
  coverageDirectory: 'coverage/e2e'
};
