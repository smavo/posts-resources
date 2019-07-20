module.exports = {
  rootDir: '.',
  testMatch: ['**/*-test.js'],
  setupFilesAfterEnv: ['./setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
