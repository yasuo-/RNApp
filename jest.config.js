module.exports = {
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', __dirname],
  testRunner: 'jest-circus/runner',
  // setupFiles: ['./jest/setup.js'],
};
