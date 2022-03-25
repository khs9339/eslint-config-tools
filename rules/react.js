module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.14.0',
    },
    'import/extensions': [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.vue',
      '.mjs',
    ],
  },
  rules: {
    // react일 경우
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};