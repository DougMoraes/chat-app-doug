module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  root: true,
};