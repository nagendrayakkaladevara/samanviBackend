module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },
  ignorePatterns: [
    'src/generated/**/*',
    'dist/**/*',
    'node_modules/**/*'
  ],
}; 