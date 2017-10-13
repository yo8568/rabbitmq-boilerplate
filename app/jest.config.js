module.exports = {
  testRegex: '(/test/.*\\.spec.js)$',
  testEnvironment: 'node',
  setupFiles: [
    '<rootDir>/test/setup.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test/setupTestFramework.js',
  coverageReporters: ['text', 'text-summary'],
  coveragePathIgnorePatterns: ['/src/config/']
}
