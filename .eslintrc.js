module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "generators": true,
            "experimentalObjectRestSpread": true
        }
    },
    plugins: [
        "react"
    ],
    "rules": {
        "indent": ["warn", 4],
        "semi": ["warn", "always"],
        "eqeqeq": "off",
        "quotes": [
            "warn",
            "single"
        ],
        "no-unused-vars": "off"
    }
}