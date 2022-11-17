import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchPlugin } from '@vuepress/plugin-search'

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
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
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
      imageLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
    }),
    searchPlugin({})
  ]
})
