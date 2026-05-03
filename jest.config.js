module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
  testMatch: ['**/tests/**/*.test.js'],
};
