import process from 'node:process'
import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'
import { shikiPlugin } from '@vuepress/plugin-shiki'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-solid-template/'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Vuepress Solid Template',
  description: 'Best Vuepress Template',
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
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
            link: '/demo/'
          }
        ]
      }
    ],
    sidebar: {
      '/demo/': [
        {
          text: 'Demo',
          children: [
            '/demo/page01.md',
            '/demo/page02.md',
          ]
        }
      ]
    }
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      linkCheck: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@recommend',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommend'
            }
          }
        }
      ]
    }, false),
    searchProPlugin({}),
    autoCatalogPlugin({
      orderGetter: ({ title, routeMeta }) => {
        if (routeMeta.order) return routeMeta.order as number
        const prefix = title.match(/^\d+. /)
        if (prefix) return parseInt(prefix[0])
        const suffix = title.match(/\d+$/)
        if (suffix) return parseInt(suffix[0])
        return 0
      }
    }),
    copyCodePlugin({
      showInMobile: true
    }),
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
  alias: {
    '@': path.resolve(
      __dirname,
      '.',
    )
  },
})