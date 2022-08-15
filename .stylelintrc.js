module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-class-pattern': '^[a-z][a-z0-9-_]+[a-z0-9]$',
  },
}
