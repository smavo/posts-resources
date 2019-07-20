module.exports = {
  rootDir: '.',
  testMatch: ['**/*-test.js'],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each'
  ]
}
