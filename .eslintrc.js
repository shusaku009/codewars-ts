module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,

  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "error",
  },
  parser: '@typescript-eslint/parser',
};
