import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: [
      '!docs/.vuepress/',
      'docs/.vuepress/.temp/',
      'docs/.vuepress/.cache/',
      'docs/.vuepress/dist/',
    ],
    markdown: false,
    typescript: true,
  },
  ...compat.config({
    overrides: [{
      extends: ['plugin:markdownlint/recommended'],
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      rules: {
        // no-multiple-blanks
        'markdownlint/md012': 'warn',
        // line-length
        'markdownlint/md013': 'off',
        // blanks-around-fences
        'markdownlint/md031': ['warn', {
          list_items: false,
        }],
        // no-inline-html
        'markdownlint/md033': ['warn', {
          allowed_elements: [
            'Catalog',
          ],
        }],
      },
    }],
  }),
  {
    rules: {
      'import/order': 'off',
      'no-console': 'off',
    },
  },
)
