/* eslint-env node */

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@veracity/eslint-config/patch')

module.exports = {
  extends: ['@veracity/eslint-config/recommended'],
}
