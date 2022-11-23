# Vuepress Solid Template

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Sun-ZhenXing/vuepress-solid-template/Deploy%20Docs)

[中文文档](./README.zh.md)

> **Solid** is not **Solid.js**

Best Vuepress Template. [Demo Page](https://blog.alexsun.top/vuepress-solid-template/).

```bash
git clone --single-branch https://github.com/Sun-ZhenXing/vuepress-solid-template.git vuepress-my-docs

cd vuepress-my-docs

pnpm i

pnpm dev
```

The only thing you need to do is to configure `docs/.vuepress/config.ts`：
1. change `USER_NAME` to yours.
2. change `BASE_PATH` to your repo name.
3. (optional) change `README.md` and `package.json: "name"`

### GitHub Pages

If you need to open GitHub Pages:
1. Open GitHub repo page
2. click `setting`
3. click `Pages`, goto `Build and deployment`
4. save your config as `Branch: gh-pages /(root)`

It will create **GitHub Pages** automatically. If you don't want it, reomve `.github/workflows/` file.
