module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'prettier',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    rules: {
        semi: [1, 'always'],
    },
};
