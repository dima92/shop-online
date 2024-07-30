import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...airbnbBase.rules,
    },
  },
];
