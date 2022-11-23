# Vuepress Solid Template

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Sun-ZhenXing/vuepress-solid-template/Deploy%20Docs)

> **Solid** 不是 **Solid.js**！

最佳 Vuepress 模板，[Demo 页面](https://blog.alexsun.top/vuepress-solid-template/) 。

```bash
git clone https://github.com/Sun-ZhenXing/vuepress-solid-template.git

cd vuepress-solid-template

pnpm i

pnpm dev
```

你唯一要做的是 `docs/.vuepress/config.ts`：
1. 将 `USER_NAME` 修改为你的用户名
2. 将 `BASE_PATH` 修改为你的仓库路径
3. （可选）将 `README.md` 和 `package.json: "name"` 改为你需要的

### GitHub Pages

如果你想打开 GitHub Pages:
1. 打开项目页面
2. 点击 `setting`
3. 点击 `Pages`，然后到 `Build and deployment` 下面
4. 保存设置 `Branch: gh-pages /(root)`

这将自动创建 **GitHub Pages**，如果你不需要，可以删除 `.github/workflows/` 下的文件。
