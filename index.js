module.exports = {
    "root": true,
    "env": {
        "es2021": true,
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "plugins": [
    ],
    "ignorePatterns": [
        "/coverage",
        "/bin",
        "/dist",
        "/build",
        "/node_modules",
        "/out",
        "/public",
        "/static",
        "/.coverage",
        "/.git",
        "/.idea",
        "/.vscode",
        "/src/assets",
        "*.config.js"
    ],
    "rules": {
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1,
                "MemberExpression": 1,
                "FunctionDeclaration": {
                    "parameters": 1,
                    "body": 1
                },
                "FunctionExpression": {
                    "parameters": 1,
                    "body": 1
                },
                "CallExpression": {
                    "arguments": 1
                },
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
                "flatTernaryExpressions": false,
                "ignoreComments": false,
                "ignoredNodes": [
                    "TemplateLiteral *"
                ],
                "offsetTernaryExpressions": false
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "never",
                "functions": "never"
            }
        ],
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": [
            "error",
            {
                "properties": "never",
                "ignoreDestructuring": false,
                "ignoreImports": false,
                "ignoreGlobals": false
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore"
            }
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "handle-callback-err": [
            "error",
            "^(err|error)$"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 0
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error"
        ],
        "no-dupe-args": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-dupe-keys": [
            "error"
        ],
        "no-duplicate-case": [
            "error"
        ],
        "no-func-assign": [
            "error"
        ],
        "no-global-assign": [
            "error"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": [
            "error",
            {
                "allowMultiplePropertiesPerLine": true,
                "allowAllPropertiesOnSameLine": false
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/lines-between-class-members": [
            "error"
        ],
        "@typescript-eslint/no-use-before-define": [
            "warn",
            {
                "functions": false,
                "classes": false
            }
        ],
        "@typescript-eslint/prefer-for-of": [
            "warn"
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "multilineDetection": "brackets"
            }
        ],
        "@typescript-eslint/method-signature-style": [
            "error",
            "method"
        ],
        "@typescript-eslint/no-empty-interface": [
            "warn"
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn"
        ],
        "@typescript-eslint/space-infix-ops": [
            "error",
            {
                "int32Hint": false
            }
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "@typescript-eslint/comma-dangle": [
          "error",
          {
              "arrays": "always-multiline",
              "objects": "always-multiline",
              "imports": "always-multiline",
              "exports": "never",
              "functions": "never",
              "enums": "always-multiline",
              "tuples": "always-multiline",
          }
        ],
    },
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint"
            ],
            "rules": {
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        "selector": "interface",
                        "format": [
                            "PascalCase"
                        ],
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid",
                        "prefix": [
                            "I"
                        ]
                    },
                    {
                        "selector": "typeAlias",
                        "format": [
                            "PascalCase"
                        ],
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid",
                        "prefix": [
                            "T"
                        ]
                    }
                ]
            }
        }
    ]
};

