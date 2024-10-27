module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: [],
  transformIgnorePatterns: [
    '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|ts)$'
  ],
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest'],
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/src/db/migrations/",
    "/src/db/seeders/",
  ]
};
