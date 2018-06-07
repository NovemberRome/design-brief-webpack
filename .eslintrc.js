module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  globals: {
    process: false,
    APP_TITLE: false,
  },
  rules: {
    'no-unused-expressions': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          './app/',
        ],
        moduleDirectory: [
          './node_modules/',
          './test/',
        ],
      },
    },
  },
};
