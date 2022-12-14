# Vuepress Solid Template

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Sun-ZhenXing/vuepress-solid-template/deploy-docs.yml?branch=main)

[δΈ­ζζζ‘£](./README.zh.md)

> **Solid** is not **Solid.js**

Best Vuepress Template. [Demo Page](https://blog.alexsun.top/vuepress-solid-template/).

Features:
- π VuePress2 (Vue3 + Vite4 + TS)
- β¨ [`vuepress-plugin-md-enhance`](https://vuepress-theme-hope.github.io/v2/md-enhance/)
    - π Support LaTeX math formulas using [KaTeX](https://katex.org/)
    - π [Mermaid](https://mermaid-js.github.io/mermaid/#/) support
    - π [Echarts](https://echarts.apache.org/) support
- π Copy code support
- π static search support

## Start

```bash
git clone --single-branch https://github.com/Sun-ZhenXing/vuepress-solid-template.git vuepress-my-docs --depth=1

cd vuepress-my-docs

pnpm i

pnpm dev
```

The only thing you need to do is to configure `docs/.vuepress/config.ts`οΌ
1. change `USER_NAME` to yours.
2. change `BASE_PATH` to your repo name.
3. (optional) change `README.md` and `package.json: "name"`

## How to config GitHub Pages?

If you need to open GitHub Pages:
1. Open your GitHub repo page
2. click `Settings`
3. click `Pages`, goto `Build and deployment`
4. config as `Branch: gh-pages /(root)`, or force HTTPS, save

It will create **GitHub Pages** automatically. If you don't want it, reomve `.github/workflows/` file.
