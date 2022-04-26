module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
        'outerIIFEBody': 1,
        'MemberExpression': 1,
        'FunctionDeclaration': {
          'parameters': 1,
          'body': 1,
        },
        'FunctionExpression': {
          'parameters': 1,
          'body': 1,
        },
        'CallExpression': {
          'arguments': 1,
        },
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'flatTernaryExpressions': false,
        'ignoreComments': false,
        'ignoredNodes': [
          'TemplateLiteral *',
        ],
        'offsetTernaryExpressions': false,
      },
    ],
    'semi': [
      'error',
      'always',
    ],
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'quotes': [
      'error',
      'single',
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'never',
        'functions': 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'none',
        'ignoreRestSiblings': true,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'arrow-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true,
      },
    ],
    'camelcase': [
      'error',
      {
        'properties': 'always',
        'ignoreDestructuring': false,
        'ignoreImports': false,
        'ignoreGlobals': false,
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'curly': [
      'error',
      'all',
    ],
    'eqeqeq': [
      'error',
      'always',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0,
      },
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error',
      {
        'allowMultiplePropertiesPerLine': true,
        'allowAllPropertiesOnSameLine': false,
      },
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'no-multi-spaces': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
  },
};