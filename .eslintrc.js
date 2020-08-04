module.exports = {
  env: {
    'react-native/react-native': true
  },
  plugins: ['react', 'react-native', 'unused-imports'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['warn', 'always'],
    'no-unused-vars': 'warn',
    'linebreak-style': ['warn', 'unix'],
    'no-multiple-empty-lines': 'warn',
    'padding-line-between-statements': [
      'warn',
      //
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['block-like', 'export']
      },
      {
        blankLine: 'always',
        prev: ['block-like', 'export'],
        next: ['*']
      },
      //
      { blankLine: 'never', prev: ['const'], next: ['const'] },
      { blankLine: 'always', prev: ['multiline-const'], next: ['*'] },
      { blankLine: 'always', prev: ['*'], next: ['multiline-const'] },
      //
      { blankLine: 'never', prev: ['let'], next: ['let'] },
      { blankLine: 'always', prev: ['multiline-let'], next: ['*'] },
      { blankLine: 'always', prev: ['*'], next: ['multiline-let'] },
      //
      { blankLine: 'never', prev: ['var'], next: ['var'] },
      { blankLine: 'always', prev: ['multiline-var'], next: ['*'] },
      { blankLine: 'always', prev: ['*'], next: ['multiline-var'] },
      //
      { blankLine: 'never', prev: ['import'], next: ['import'] }
    ],

    // Plugin: react
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',

    // Plugin: react-native
    'react-native/no-unused-styles': 'warn',
    'react-native/no-raw-text': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
    'react-native/split-platform-components': 'warn',

    // Plugin: unused-imports
    'unused-imports/no-unused-imports': 'warn'
  },
  globals: {
    Intl: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11, // ECMAScript 2020
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
