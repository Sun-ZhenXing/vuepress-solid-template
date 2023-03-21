# Vuepress Solid Template

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Sun-ZhenXing/vuepress-solid-template/deploy-docs.yml?branch=main)

> **Solid** 不是 **Solid.js**！

最佳 Vuepress 模板，在几分钟之内获得一个精美的、已经配置好的默认主题文档。[Demo 页面](https://blog.alexsun.top/vuepress-solid-template/)。

特征：
- 🎉 VuePress2 (Vue3 + Vite4 + TS)
- ✨ [VuePress MarkDown Enhance](https://vuepress-theme-hope.github.io/v2/md-enhance/)
    - 📖 支持 LaTeX 数学公式，使用 [KaTeX](https://katex.org/)
    - 📈 [Mermaid](https://mermaid-js.github.io/mermaid/#/) 支持
    - 📊 [Echarts](https://echarts.apache.org/) 支持
- 📋 支持复制代码
- 🔍 静态搜索

## 开始

```bash
# 你可以把 `vuepress-my-docs` 改成你自己定义的仓库名称
git clone --single-branch https://github.com/Sun-ZhenXing/vuepress-solid-template.git vuepress-my-docs --depth=1
cd vuepress-my-docs
pnpm i
pnpm dev
```

你唯一要做的是 `docs/.vuepress/config.ts`：
1. 将 `USER_NAME` 修改为你的用户名
2. 将 `BASE_PATH` 修改为你的仓库路径

## 上传代码到远程仓库

将 `${YOUR_REPO}` 改为你的远程仓库地址。

```bash
cd vuepress-my-docs
rm -rf .git
git init
git add .
git commit -m "init from Sun-ZhenXing/vuepress-solid-template"
git remote add origin ${YOUR_REPO}
git branch -M main
git push -u origin main
```

## 如何设置 GitHub Pages？

如果你想打开 GitHub Pages：

1. GitHub 打开你的项目主页页面
2. 点击 `Settings`
3. 点击 `Actions`，然后点击 `General`
4. 找到 `Workflow permissions`，然后选中 `Read and write permissions`，保存
5. 然后点击侧边栏的 `Pages`，然后到 `Build and deployment` 下面
6. 设置 `Branch: gh-pages /(root)`，可选的 HTTPS，保存

这将自动创建 **GitHub Pages**，如果你不需要，可以删除 `.github/workflows/` 下的文件。
