module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
 rules: {
    "no-new": "off",
    "no-alert": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "max-depth": ["error", 2],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
};
