import process from 'node:process'
import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { slug as slugify } from 'github-slugger'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'
const ROOT_PATH = path.resolve(__dirname, '../..')
const CURRENT_PATH = path.resolve(__dirname, '.')
const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-solid-template/'

export default defineUserConfig({
  lang: 'en-US',
  title: 'VuePress Solid Template',
  description: 'Best VuePress Template',
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10,
    },
    anchor: {
      level: [1, 2, 3, 4, 5, 6],
      slugify,
    },
    importCode: {
      handleImportPath: str => str
        .replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
        .replace(/^@\//, CURRENT_PATH.replace(/(?:|\\|\/)$/, '/')),
    },
  },
  bundler: viteBundler({
    // BUG: https://github.com/mermaid-js/mermaid/issues/4320
    viteOptions: {
      optimizeDeps: {
        include: [
          'mermaid',
        ],
      },
    },
  }),
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    docsDir: 'docs',
    navbar: [
      {
        text: 'Demo for Vuepress Solid',
        children: [
          {
            text: 'Vuepress Solid Template',
            link: '/demo/',
          },
        ],
      },
    ],
    sidebar: {
      '/demo/': [
        {
          text: 'Demo',
          children: [
            '/demo/page01.md',
            '/demo/page02.md',
          ],
        },
      ],
    },
    themePlugins: {
      git: isProd,
    },
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      hint: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      include: {
        resolvePath: file => {
          if (file.startsWith('@/'))
            return file.replace(/^@\//, CURRENT_PATH)
          if (file.startsWith('/'))
            return file.replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
          return file
        },
      },
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      linkify: false,
      katex: {
        copy: true,
      },
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@recommend',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommend',
            }
          },
        },
      ],
    }, false),
    searchProPlugin({}),
    catalogPlugin({}),
    shikiPlugin({ theme: 'dark-plus' }),
  ],
  alias: {
    '@': CURRENT_PATH,
  },
})
