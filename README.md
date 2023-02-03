# Vuepress Solid Template

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Sun-ZhenXing/vuepress-solid-template/deploy-docs.yml?branch=main)

[中文文档](./README.zh.md)

> **Solid** is not **Solid.js**

Best Vuepress Template. [Demo Page](https://blog.alexsun.top/vuepress-solid-template/).

Features:
- 🎉 VuePress2 (Vue3 + Vite4 + TS)
- ✨ [`vuepress-plugin-md-enhance`](https://vuepress-theme-hope.github.io/v2/md-enhance/)
    - 📖 Support LaTeX math formulas using [KaTeX](https://katex.org/)
    - 📈 [Mermaid](https://mermaid-js.github.io/mermaid/#/) support
    - 📊 [Echarts](https://echarts.apache.org/) support
- 📋 Copy code support
- 🔍 static search support

## Start

```bash
# You can change `vuepress-my-docs` to your own defined repository name
git clone --single-branch https://github.com/Sun-ZhenXing/vuepress-solid-template.git vuepress-my-docs --depth=1
cd vuepress-my-docs
pnpm i
pnpm dev
```

The only thing you need to do is to configure `docs/.vuepress/config.ts`：
1. change `USER_NAME` to yours.
2. change `BASE_PATH` to your repo name.

## Uploading code to a remote repository

Change `${YOUR_REPO}` to the address of your remote repository.

```bash
cd vuepress-my-docs
rm -rf .git
git init
git add .
git commit -m "init from Sun-ZhenXing/vuepress-solid-template"
git remote add origin ${YOUR_REPO}
git branch -M main
git push -u origin master
```

## How to config GitHub Pages?

If you need to open GitHub Pages:

1. Open your GitHub repo page
2. Click `Settings`
3. Click `Actions`, then click `General`
4. Find `Workflow permissions`, select `Read and write permissions`, save
5. Click `Pages` on the sidebar, goto `Build and deployment`
6. config as `Branch: gh-pages /(root)`, or force HTTPS, save

It will create **GitHub Pages** automatically. If you don't want it, reomve `.github/workflows/` file.
