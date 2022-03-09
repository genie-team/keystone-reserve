module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: false,
    amd: false,
    node: true,
  },
  rules: {
    quotes: ['error', 'single'],
  },
};
