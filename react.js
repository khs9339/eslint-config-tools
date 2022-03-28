module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: ['./rules/eslint', './rules/tslint', './rules/react'].map((e)=> require.resolve(e)),
  plugins: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: [
    '/coverage',
    '/bin',
    '/dist',
    '/build',
    '/node_modules',
    '/out',
    '/public',
    '/static',
    '/.coverage',
    '/.git',
    '/.idea',
    '/.vscode',
    '/src/assets',
    '*.config.js',
  ],
};