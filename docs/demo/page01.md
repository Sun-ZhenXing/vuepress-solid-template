---
lang: en-US
title: Page-01
description: Demo for page-01
---

# Demo for page-01

## LaTeX

$$
\LaTeX \oiiint_\Sigma
$$

## Badge & Footnote

*@recommend* All of VuePress2 is ready![^1]

[^1]: footnote!

## Container

::: warning

Solid is not Solid.js!

:::

## Image

![](/favicon.svg)

## Mermaid

```mermaid
flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
  one --> two
  three --> two
  two --> c2
```

## Copy Code

```cpp
#include <iostream>

int main(int argc, char** argv) {
  std::cout << "Hello World!" << std::endl;
  return 0;
}
```
