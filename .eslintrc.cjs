/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "foxkit",
    "@vue/eslint-config-typescript",
    "foxkit/ts",
    "eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  }
};
