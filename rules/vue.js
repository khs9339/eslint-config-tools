module.exports = {
  'extends': [
    'plugin:vue/recommended',
    'plugin:vue/vue3-recommended',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'vueFeatures': {
      'filter': false, // Don't!!
    },
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'vue/attribute-hyphenation': [
      'off',
    ],
    'vue/custom-event-name-casing': [
      'off',
    ],
    'vue/html-closing-bracket-spacing': [
      'off',
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
    'vue/html-comment-indent': [
      'error',
      2,
    ],
    'vue/html-self-closing': [
      'off',
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        'singleline': {
          'max': 3,
        },
        'multiline': {
          'max': 1,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        'ignoreWhenEmpty': false,
        'ignores': ['pre', 'textarea'],
        'allowEmptyLines': false,
      },
    ],
    'vue/no-parsing-error': [
      'error',
      {
        'control-character-in-input-stream': false,
        'x-invalid-end-tag': false,
      },
    ],
    'vue/no-v-html': [
      'off',
    ],
    'vue/require-default-prop': [
      'warn',
    ],
    'vue/require-prop-types': [
      'warn',
    ],
    'vue/singleline-html-element-content': [
      'off',
    ],
    'vue/singleline-html-element-content-newline': [
      'off',
    ],
    'vue/multi-word-component-names': [
      'off',
    ],
    'vue/no-deprecated-v-bind-sync': [
      'off',
    ],
    'vue/v-on-event-hyphenation': [
      'off',
    ],
    'vue/no-deprecated-destroyed-lifecycle': [
      'off',
    ],
    'vue/no-v-for-template-key-on-child': [
      'off',
    ],
    'vue/require-explicit-emits': [
      'off',
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        'singleline': 'beside',
        'multiline': 'below',
      },
    ],
    'accessor-pairs': [
      'error',
    ],
    'vue/attributes-order': [
      'warn',
    ],
    'vue/component-tags-order': [
      'warn',
    ],
    'vue/no-lone-template': [
      'warn',
    ],
    'vue/no-multiple-slot-args': [
      'warn',
    ],
    'vue/order-in-components': [
      'warn',
    ],
    'vue/this-in-template': [
      'warn',
    ],
    'vue/component-definition-name-casing': [
      'warn',
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
    ],
    'vue/html-end-tags': [
      'error',
    ],
    'vue/html-quotes': [
      'warn',
    ],
    'vue/mustache-interpolation-spacing': [
      'warn',
    ],
    'vue/no-multi-spaces': [
      'warn',
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': [
      'warn',
    ],
    'vue/no-template-shadow': [
      'warn',
    ],
    'vue/one-component-per-file': [
      'warn',
    ],
    'vue/prop-name-casing': [
      'warn',
    ],
    'vue/v-bind-style': [
      'warn',
    ],
    'vue/v-on-style': [
      'warn',
    ],
    'vue/v-slot-style': [
      'warn',
    ],
    'vue/no-arrow-functions-in-watch': [
      'error',
    ],
    'vue/no-async-in-computed-properties': [
      'error',
    ],
    'vue/no-custom-modifiers-on-v-model': [
      'error',
    ],
    'vue/no-dupe-keys': [
      'error',
    ],
    'vue/no-dupe-v-else-if': [
      'error',
    ],
    'vue/no-duplicate-attributes': [
      'error',
    ],
    'vue/no-multiple-template-root': [
      'error',
    ],
    'vue/no-mutating-props': [
      'error',
    ],
    'vue/no-reserved-keys': [
      'error',
    ],
    'vue/no-shared-component-data': [
      'error',
    ],
    'vue/no-side-effects-in-computed-properties': [
      'error',
    ],
    'vue/no-template-key': [
      'error',
    ],
    'vue/no-textarea-mustache': [
      'error',
    ],
    'vue/no-unused-components': [
      'error',
    ],
    'vue/no-unused-vars': [
      'warn',
    ],
    'vue/no-use-v-if-with-v-for': [
      'error',
    ],
    'vue/no-v-for-template-key': [
      'error',
    ],
    'vue/no-v-model-argument': [
      'error',
    ],
    'vue/require-component-is': [
      'error',
    ],
    'vue/require-prop-type-constructor': [
      'error',
    ],
    'vue/require-render-return': [
      'error',
    ],
    'vue/require-v-for-key': [
      'warn',
    ],
    'vue/require-valid-default-prop': [
      'warn',
    ],
    'vue/return-in-computed-property': [
      'error',
    ],
    'vue/use-v-on-exact': [
      'error',
    ],
    'vue/valid-template-root': [
      'error',
    ],
    'vue/valid-v-bind-sync': [
      'error',
    ],
    'vue/valid-v-bind': [
      'error',
    ],
    'vue/valid-v-cloak': [
      'error',
    ],
    'vue/valid-v-else-if': [
      'error',
    ],
    'vue/valid-v-else': [
      'error',
    ],
    'vue/valid-v-for': [
      'error',
    ],
    'vue/valid-v-html': [
      'error',
    ],
    'vue/valid-v-if': [
      'error',
    ],
    'vue/valid-v-model': [
      'error',
    ],
    'vue/valid-v-on': [
      'error',
    ],
    'vue/valid-v-once': [
      'error',
    ],
    'vue/valid-v-pre': [
      'error',
    ],
    'vue/valid-v-show': [
      'error',
    ],
    'vue/valid-v-slot': [
      'error',
    ],
    'vue/valid-v-text': [
      'error',
    ],
    'vue/comment-directive': [
      'error',
    ],
    'vue/jsx-uses-vars': [
      'error',
    ],
    'vue/script-setup-uses-vars': [
      'error',
    ],
    'vue/no-setup-props-destructure': [
      'off',
    ],
    'vue/no-deprecated-html-element-is': [
      'off',
    ],
    'vue/no-useless-template-attributes': [
      'off',
    ],
    'vue/html-comment-content-newline': ['error',
      {
        'singleline': 'ignore',
        'multiline': 'always',
      },
      {
        'exceptions': [],
      },
    ],
    'vue/no-empty-component-block': [
      'off',
    ],
    'vue/no-reserved-component-names': [
      'off',
    ],
    'vue/no-unregistered-components': [
      'error',
      {
        'ignorePatterns': [
          'q-(\\w+)+',
          'vue-(\\w+)+',
          'router-(\\w+)+',
          'date-picker',
          'lazy-background',
        ],
      },
    ],
    'vue/v-on-function-call': [
      'error',
    ],
  },
  'settings': {
    'import/extensions': [
      '.ts',
      '.js',
      '.vue',
    ],
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'parser': 'vue-eslint-parser',
      'parserOptions': {
        'parser': {
          'ts': '@typescript-eslint/parser',
        },
        'sourceType': 'module',
      },
    },
  ],
};
