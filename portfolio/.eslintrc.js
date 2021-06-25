module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'promise', 'radar', 'prettier'],
    extends: [
        'next',
        'next/core-web-vitals',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:import/recommended',
        'plugin:radar/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    settings: {
        react: {
            version: '17',
        },
    },
    rules: {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        'react/jsx-filename-extension': 'off',
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        '@typescript-eslint/explicit-function-return-type': [
            'off',
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        '@typescript-eslint/no-use-before-define': [
            'warn',
            { functions: false, classes: true, variables: true, typedefs: true },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': 'warn',
        'no-use-before-define': 'warn',
        'radar/cognitive-complexity': 'warn',
        'react/display-name': 0,
    },
};
