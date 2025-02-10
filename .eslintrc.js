module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
    'jsx-a11y/alt-text': 'off',
    'no-unused-vars': 'off'
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
