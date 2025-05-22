module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Движку нужен проект TS для правил с типами
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-irregular-whitespace': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['error', {allow: ['error']}],
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
