module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:json/recommended"
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-multiple-template-root': 0
  }
}
