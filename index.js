module.exports = {
  plugins: [
    'import'
  ],
  rules: {
    'prefer-const': ['error',{
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true
    }],
    'no-const-assign': 'error',
    'no-var': 'error',
    'no-new-object': 'error',
    'object-shorthand': 'error',
    'quote-props': ['error','as-needed'],
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-destructuring': 'error',
    'quotes': ['error','single'],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-useless-escape': 'error',
    'no-new-func': 'error',
    'space-before-function-paren': 'error',
    'space-before-blocks': 'error',
    'no-param-reassign': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'arrow-body-style': ['error','as-needed', {
      'requireReturnForObjectLiteral': false
    }],
    'arrow-parens': ['error','as-needed', {
      'requireForBlockBody': true
    }],
    'no-confusing-arrow': ['error', { 'allowParens': true }],
    'no-duplicate-imports': 'error',
    'import/named': 'error',
    'import/default': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/first': ['error', 'absolute-first'],
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
    }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/exports-last': 'off',
    'generator-star-spacing': ['error', 'after'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error',{
      'after': true,
      'before': true
    }],
    'space-infix-ops': 'error',
    'eol-last': ['error','always'],
    'array-bracket-spacing': ['error','never'],
    'object-curly-spacing': ['error','always'],
    'max-len': ['error',100],
    'comma-style': ['error','last'],
    'comma-dangle': ['error','never'],
    'semi': 'error',
    'indent': ['error',2,{
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'MemberExpression': 0,
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1
      },
      'CallExpression': {
        'arguments': 1
      },
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1,
      'flatTernaryExpressions': false
    }]
  }
}

