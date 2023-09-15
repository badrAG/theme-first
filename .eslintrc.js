module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        'plugin:nuxt/recommended',
        "@nuxt/eslint-config"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
