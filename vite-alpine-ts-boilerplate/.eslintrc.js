module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jquery: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {},
};
