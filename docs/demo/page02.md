---
lang: en-US
title: Page-02
description: Demo for page-02
---

# Demo for page-02

## Install

Install VuePress Plugin Markdown Enhance:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance@next
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance@next
```

@tab:active npm

```bash
npm i -D vuepress-plugin-md-enhance@next
```

:::

## Demo for container

::: info

```bash
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116
```

Get the version of PyTorch:

```python
import logging

import torch

print('PyTorch:', torch.__version__)

device = None
if torch.cuda.is_available():
    device = torch.device('cuda')
    logging.log('CUDA:', torch.version.cuda)
    logging.log('cuDNN:', torch.backends.cudnn.version())
else:
    device = torch.device('cpu')
    logging.warn('CUDA is not available, using CPU instead! Check your CUDA installation!')
```

:::

::: details

Install Pnpm:

```bash
npm i -g pnpm
```

:::
