/*!
 * Adorade (v1.0.0): .eslintrc.js
 * Copyright (c) 2019 - 2022 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "block-spacing": "error",
    "comma-dangle": "error",
    "comma-style": ["error", "last"],
    indent: ["error", 2, {
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      SwitchCase: 1
    }],
    "no-floating-decimal": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 1 }],
    "no-trailing-spaces": "error",
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "never"],
    "space-before-function-paren": "error"
  },
  overrides: [
    {
      files: [
        "gulpfile.mjs",
        "**/vendor/js/**/*.js",
        "tools/**/*.mjs",
        ".eslintrc.js",
        "functions/**/*.js"
      ],
      rules: {
        semi: ["error", "always"]
      }
    },
    {
      files: [
        "functions/**/*.js"
      ],
      rules: {
        "no-unused-vars": "off"
      }
    },
    {
      files: [
        ".eslintrc.js"
      ],
      rules: {
        quotes: ["error", "double"]
      }
    }
  ]
};
