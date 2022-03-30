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
        'properties': 'never',
        'ignoreDestructuring': false,
        'ignoreImports': false,
        'ignoreGlobals': false,
      },
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'curly': [
      'error',
      'multi-line',
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        'null': 'ignore',
      },
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'handle-callback-err': [
      'error',
      '^(err|error)$',
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
    'no-dupe-args': [
      'error',
    ],
    'no-dupe-class-members': [
      'error',
    ],
    'no-dupe-keys': [
      'error',
    ],
    'no-duplicate-case': [
      'error',
    ],
    'no-func-assign': [
      'error',
    ],
    'no-global-assign': [
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