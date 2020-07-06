module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 11
    },
    "extends": ['airbnb-base', 'prettier'],
    "plugins": ['prettier'],
    "rules": {
        "class-methods-use-this": "off", // ignore obligation to use this in class methods
        "no-param-reassign": "off", // allow alterations in received params method
        "camelcase": "off", // disable enforced camelcase on vars
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], // allow unused vars... its necessaire to declare next in some express middlewares
        "arrow-body-style": "off", // disable arrow body styleguide force definition
        "prettier/prettier": "error",
      },
};
