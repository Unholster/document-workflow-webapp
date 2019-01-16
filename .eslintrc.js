var ignoreLongStrings = "\"(?:[^\"\\\\]|\\\\.){60,}\"|'(?:[^'\\\\]|\\\\.){60,}'|`(?:[^`\\\\]|\\\\.){60,}`"

module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ],
    'globals': {
        'window': true,
        'document': true
    },
    'env': {
        'browser': true,
        'node': true
    },
    'rules': {
        'max-len': [2, 120, 4, { ignoreComments: true, ignorePattern: ignoreLongStrings }],
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'no-nested-ternary': 0,
        'no-debugger': 0,
        'camelcase': 0,
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'no-plusplus': 0
    }
}
