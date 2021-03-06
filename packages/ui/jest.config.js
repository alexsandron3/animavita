const expoPreset = require('jest-expo/jest-preset');
const jestPreset = require('@testing-library/react-native/jest-preset');

const pkg = require('./package');

module.exports = Object.assign({}, expoPreset, jestPreset, {
  rootDir: './',
  name: pkg.name,
  displayName: pkg.name.toUpperCase(),
  setupFiles: [...expoPreset.setupFiles, ...jestPreset.setupFiles],
  preset: '@testing-library/react-native',
  browser: false,
  setupFilesAfterEnv: ['./tests/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
});
