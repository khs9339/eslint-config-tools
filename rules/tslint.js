module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["@typescript-eslint"],
    parserOptions: {
      sourceType: "module",
    },
    rules: {
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
    overrides: [
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